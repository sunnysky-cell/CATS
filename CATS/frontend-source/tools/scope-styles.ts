import type { Node, Plugin, Rule } from 'postcss';
import selectorParser from 'postcss-selector-parser';

const scopeClass = 'cats-course-workspace';

function belongsToKeyframes(rule: Rule): boolean {
  let parent: Node['parent'] = rule.parent;
  while (parent) {
    if (
      parent.type === 'atrule' &&
      'name' in parent &&
      typeof parent.name === 'string' &&
      /keyframes$/i.test(parent.name)
    )
      return true;
    parent = parent.parent;
  }
  return false;
}

function hasRuleAncestor(rule: Rule): boolean {
  let parent: Node['parent'] = rule.parent;
  while (parent) {
    if (parent.type === 'rule') return true;
    parent = parent.parent;
  }
  return false;
}

/** Scope compiled utilities as well as tokens; source CSS alone cannot isolate portals. */
export function scopeWorkspaceStyles(): Plugin {
  return {
    postcssPlugin: 'cats-scope-workspace',
    OnceExit(root) {
      // CSS property registration is document-wide and cannot have a selector.
      // Give Tailwind's registered variables island-specific names as well.
      root.walkAtRules('property', (rule) => {
        rule.params = rule.params.replace(/--tw-/g, '--cats-workspace-tw-');
      });
      root.walkDecls((declaration) => {
        declaration.prop = declaration.prop.replace(/--tw-/g, '--cats-workspace-tw-');
        declaration.value = declaration.value.replace(/--tw-/g, '--cats-workspace-tw-');
      });
      const animations = new Map<string, string>();
      root.walkAtRules(/keyframes$/i, (rule) => {
        const original = rule.params;
        const scoped = `cats-workspace-${original}`;
        animations.set(original, scoped);
        rule.params = scoped;
      });

      root.walkDecls((declaration) => {
        if (!declaration.prop.includes('animation') && !declaration.prop.startsWith('--animate-'))
          return;
        for (const [original, scoped] of animations) {
          const escapedName = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          declaration.value = declaration.value.replace(
            new RegExp(`(?<![-\\w])${escapedName}(?![-\\w])`, 'g'),
            scoped,
          );
        }
      });

      root.walkRules((rule) => {
        // Nested selectors already inherit their outer rule's scope.
        if (hasRuleAncestor(rule) || belongsToKeyframes(rule)) return;

        rule.selector = selectorParser((selectors) => {
          selectors.each((selector) => {
            selector.walkPseudos((pseudo) => {
              if (pseudo.value === ':root' || pseudo.value === ':host') {
                pseudo.replaceWith(selectorParser.className({ value: scopeClass }));
              }
            });
            let alreadyScoped = false;
            selector.walkClasses((node) => {
              if (node.value === scopeClass) alreadyScoped = true;
            });
            if (!alreadyScoped) {
              selector.prepend(selectorParser.combinator({ value: ' ' }));
              selector.prepend(selectorParser.className({ value: scopeClass }));
            }
          });
        }).processSync(rule.selector);
      });

      // Existing Java CSS is unlayered. Flatten only this isolated bundle so its
      // scoped utilities can override those broad input/button rules normally.
      root.walkAtRules('layer', (rule) => {
        if (rule.nodes) rule.replaceWith(rule.nodes);
        else rule.remove();
      });
    },
  };
}
