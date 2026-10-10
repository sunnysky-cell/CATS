/* Name-based avatars are the fallback until the Java profile has a photo field. */
(() => {
  'use strict';

  function initials(name) {
    const words = name.trim().split(/\s+/u).filter(Boolean);
    if (!words.length) return 'U';
    if (words.length > 1) {
      return `${Array.from(words[0])[0]}${Array.from(words.at(-1))[0]}`.toUpperCase();
    }
    return Array.from(words[0]).slice(0, 2).join('').toUpperCase();
  }

  function enhance(root = document) {
    for (const avatar of root.querySelectorAll('[data-avatar-name]')) {
      const name = avatar.dataset.avatarName || '';
      let tone = 0;
      for (const letter of name) tone = (tone * 31 + letter.codePointAt(0)) % 4;
      avatar.textContent = initials(name);
      avatar.dataset.avatarTone = String(tone);
      // The name is displayed beside the avatar, or in the enclosing Account control.
      avatar.setAttribute('aria-hidden', 'true');
    }
  }

  window.CATS_AVATARS = Object.freeze({ enhance });
  enhance();
})();
