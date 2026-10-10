import * as THREE from 'three';
import { Gallery } from './Experience/Gallery';
import { Scroll } from './Experience/Scroll';
import { Background } from './Experience/Background';
import { galleryPlaneData } from './data/galleryData';

const VIEW_OFFSET = 3.7;
const interactiveSelector = 'button, a, input, select, textarea';

// The Codrops planes, depth blending and velocity response are preserved.
// Only input coordinates and events are adapted to this embedded canvas.
class PaneGallery extends Gallery {
  constructor(surface) {
    super();
    this.surface = surface;
    this.mobileBreakpoint = 0;
    this.moodSampleOffset = VIEW_OFFSET / this.planeGap;
    this.planeFadeSampleOffset = VIEW_OFFSET / this.planeGap;
    this.parallaxAmountX = 0.07;
    this.parallaxAmountY = 0.04;
    this.breathTiltAmount = 0.03;
    this.breathScaleAmount = 0.018;
    this.gestureParallaxAmountY = 0.025;
    this.onPointerMove = (event) => {
      if (event.pointerType === 'touch') return;
      const rect = surface.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      this.pointerTarget.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        1 - ((event.clientY - rect.top) / rect.height) * 2,
      );
    };
  }

  bindPointerEvents() {
    this.surface.addEventListener('pointermove', this.onPointerMove, {
      passive: true,
    });
    this.surface.addEventListener('pointerleave', this.onPointerLeave, {
      passive: true,
    });
  }

  getXSpreadFactor() {
    return this.surface.clientWidth < 400 ? 0.5 : 1;
  }

  dispose() {
    this.surface.removeEventListener('pointermove', this.onPointerMove);
    this.surface.removeEventListener('pointerleave', this.onPointerLeave);
    const geometries = new Set();
    this.planes.forEach((plane) => {
      geometries.add(plane.geometry);
      plane.material.dispose();
      plane.removeFromParent();
    });
    geometries.forEach((geometry) => geometry.dispose());
    this.planes = [];
  }
}

class PaneScroll extends Scroll {
  constructor(camera, gallery, surface) {
    super(camera, gallery);
    this.surface = surface;
    this.firstPlaneViewOffset = VIEW_OFFSET;
    this.lastPlaneViewOffset = VIEW_OFFSET;
    this.scrollSmoothing = 0.09;
    this.wheelScrollSpeed = 0.65;
    this.onWheel = (event) => {
      // A stacked mobile page must still scroll from the artwork to the form.
      if (event.ctrlKey || event.metaKey || window.matchMedia('(max-width: 760px)').matches) return;
      const delta = this.normalizeWheelDelta(event) * this.wheelScrollSpeed;
      const maximum = this.scrollFromCameraZ(this.minCameraZ);
      if ((delta < 0 && this.scrollTarget <= 0) || (delta > 0 && this.scrollTarget >= maximum))
        return;
      if (!delta) return;
      event.preventDefault();
      this.scrollTarget = THREE.MathUtils.clamp(this.scrollTarget + delta, 0, maximum);
    };
  }

  normalizeWheelDelta(event) {
    if (event.deltaMode === 1) return event.deltaY * 16;
    if (event.deltaMode === 2) return event.deltaY * this.surface.clientHeight;
    return event.deltaY;
  }

  bindEvents() {
    this.surface.addEventListener('wheel', this.onWheel, { passive: false });
  }

  createVelocityVisualizer() {}

  dispose() {
    this.surface.removeEventListener('wheel', this.onWheel);
  }
}

class LoginGallery {
  constructor(root) {
    this.root = root;
    this.surface = root.querySelector('[data-gallery-surface]');
    this.canvas = root.querySelector('canvas');
    this.fallbackImage = root.querySelector('[data-gallery-fallback]');
    this.caption = root.querySelector('[data-gallery-caption]');
    this.counter = root.querySelector('[data-gallery-index]');
    this.motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.index = 0;
    this.disposed = false;
    this.generation = 0;
    this.frame = 0;
    this.visible = true;
    this.textures = new Set();
    this.touchStart = null;
    this.lastSwipe = -Infinity;
    this.onActivate = () => {
      // A touch swipe can emit a click too; it must advance only once.
      if (performance.now() - this.lastSwipe < 500) return;
      this.goTo((this.index + 1) % galleryPlaneData.length);
    };
    this.onKey = (event) => {
      if (event.target.closest(interactiveSelector)) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.onActivate();
        return;
      }
      const keys = {
        ArrowLeft: this.index - 1,
        ArrowRight: this.index + 1,
        Home: 0,
        End: galleryPlaneData.length - 1,
      };
      if (!(event.key in keys)) return;
      event.preventDefault();
      this.goTo(keys[event.key]);
    };
    this.onTouchStart = (event) => {
      if (event.pointerType === 'touch') this.touchStart = { x: event.clientX, y: event.clientY };
    };
    this.onTouchEnd = (event) => {
      if (!this.touchStart || event.pointerType !== 'touch') return;
      const x = event.clientX - this.touchStart.x;
      const y = event.clientY - this.touchStart.y;
      this.touchStart = null;
      if (Math.abs(x) > 40 && Math.abs(x) > Math.abs(y) * 1.3) {
        this.lastSwipe = performance.now();
        this.goTo(this.index + (x < 0 ? 1 : -1));
      }
    };
    this.onTouchCancel = () => {
      this.touchStart = null;
    };
    this.onVisibility = () => this.syncAnimation();
    this.onMotionChange = () => {
      this.releaseGraphics();
      if (this.motionPreference.matches) this.showFallback();
      else this.initialize();
    };
    this.onContextLost = (event) => {
      event.preventDefault();
      this.releaseGraphics();
      this.showFallback();
    };
    this.surface.addEventListener('click', this.onActivate);
    this.surface.addEventListener('keydown', this.onKey);
    this.surface.addEventListener('pointerdown', this.onTouchStart, {
      passive: true,
    });
    this.surface.addEventListener('pointerup', this.onTouchEnd, {
      passive: true,
    });
    this.surface.addEventListener('pointercancel', this.onTouchCancel, {
      passive: true,
    });
    this.canvas.addEventListener('webglcontextlost', this.onContextLost);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.addEventListener('change', this.onMotionChange);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.surface);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.syncAnimation();
    });
    this.intersectionObserver.observe(this.root);
    this.updateCaption();
    if (this.motionPreference.matches) this.showFallback();
    else this.initialize();
  }

  updateCaption() {
    const item = galleryPlaneData[this.index];
    this.caption.textContent = item.label.word;
    this.counter.textContent = `${String(this.index + 1).padStart(2, '0')} / ${String(galleryPlaneData.length).padStart(2, '0')}`;
    this.root.dataset.galleryItem = String(this.index + 1);
    this.fallbackImage.src = item.textureSrc;
    this.fallbackImage.alt = `${item.label.word}, an original CATS illustration`;
  }

  goTo(index) {
    this.index = THREE.MathUtils.clamp(index, 0, galleryPlaneData.length - 1);
    if (this.scroll)
      this.scroll.scrollTarget =
        (this.index * this.gallery.planeGap) / this.scroll.scrollToWorldFactor;
    this.updateCaption();
  }

  showFallback() {
    if (!this.disposed) {
      this.root.dataset.galleryState = 'fallback';
      this.updateCaption();
    }
  }

  async initialize() {
    if (this.disposed) return;
    const generation = ++this.generation;
    this.root.dataset.galleryState = 'loading';
    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: false,
        antialias: true,
        powerPreference: 'low-power',
      });
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.autoClear = false;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      this.gallery = new PaneGallery(this.surface);
      const loader = new THREE.TextureLoader();
      const loaded = await Promise.all(
        this.gallery.getTextureSources().map(async (source) => {
          const texture = await loader.loadAsync(source);
          // A late image response must not recreate resources after navigation.
          if (this.disposed || generation !== this.generation) {
            texture.dispose();
            throw new Error('Gallery initialization was cancelled.');
          }
          texture.colorSpace = THREE.SRGBColorSpace;
          this.textures.add(texture);
          return [source, texture];
        }),
      );
      if (this.disposed || generation !== this.generation) return;
      this.gallery.setPreloadedTextures(new Map(loaded));
      await this.gallery.init(this.scene);
      if (this.disposed || generation !== this.generation) return;
      this.background = new Background();
      this.background.setMoodColors(this.gallery.getMoodColorsByIndex(this.index));
      this.background.baseBlobStrength = 0.38;
      this.background.noiseStrength = 0.015;
      this.background.init();
      this.scroll = new PaneScroll(this.camera, this.gallery, this.surface);
      this.scroll.init();
      this.scroll.bindEvents();
      this.scroll.scrollTarget =
        (this.index * this.gallery.planeGap) / this.scroll.scrollToWorldFactor;
      this.scroll.scrollCurrent = this.scroll.scrollTarget;
      this.resize();
      this.render(0);
      this.root.dataset.galleryState = 'ready';
      this.syncAnimation();
    } catch (error) {
      if (this.disposed || generation !== this.generation) return;
      this.releaseGraphics();
      this.showFallback();
      console.warn('The login artwork is using its static view.', error);
    }
  }

  resize() {
    if (!this.renderer || !this.camera || !this.gallery) return;
    const width = this.surface.clientWidth;
    const height = this.surface.clientHeight;
    if (!width || !height) return;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    const viewHeight = 2 * VIEW_OFFSET * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const viewWidth = viewHeight * this.camera.aspect;
    const maximumAspect = this.gallery.planes.reduce(
      (largest, plane) => Math.max(largest, plane.userData.aspectRatio || 1),
      1,
    );
    this.gallery.desktopPlaneScale = Math.min(
      (viewHeight * 0.86) / 3,
      (viewWidth * 0.9) / (3 * maximumAspect),
    );
    this.gallery.updatePlaneScale();
  }

  render(time) {
    this.scroll.update();
    this.gallery.update(this.camera, this.scroll);
    const blend = this.gallery.getPlaneBlendData(this.camera.position.z);
    const index = blend.blend >= 0.5 ? blend.nextPlaneIndex : blend.currentPlaneIndex;
    // Keep an explicit button destination while the camera eases toward it.
    const settled = Math.abs(this.scroll.scrollTarget - this.scroll.scrollCurrent) < 0.2;
    if (settled && index !== this.index) {
      this.index = index;
      this.updateCaption();
    }
    this.background.setMoodBlend(this.gallery.getMoodBlendData(this.camera.position.z));
    const progress =
      this.scroll.scrollCurrent /
      Math.max(1, this.scroll.scrollFromCameraZ(this.scroll.minCameraZ));
    this.background.setMotionResponse({
      depthProgress: progress,
      velocityIntensity: Math.abs(this.scroll.velocity) / this.scroll.velocityMax,
    });
    this.background.update(time * 0.001);
    this.renderer.clear();
    this.background.render(this.renderer);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  }

  syncAnimation() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    if (
      this.disposed ||
      !this.scroll ||
      document.hidden ||
      !this.visible ||
      this.motionPreference.matches
    )
      return;
    const tick = (time) => {
      if (this.disposed || !this.scroll) return;
      try {
        this.render(time);
      } catch (error) {
        this.releaseGraphics();
        this.showFallback();
        return;
      }
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  releaseGraphics() {
    this.generation += 1;
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.scroll?.dispose();
    this.gallery?.dispose();
    this.background?.dispose();
    this.textures.forEach((texture) => texture.dispose());
    this.textures.clear();
    this.renderer?.dispose();
    this.scene?.clear();
    this.scroll = null;
    this.gallery = null;
    this.background = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
  }

  dispose() {
    this.disposed = true;
    this.releaseGraphics();
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    this.surface.removeEventListener('click', this.onActivate);
    this.surface.removeEventListener('keydown', this.onKey);
    this.surface.removeEventListener('pointerdown', this.onTouchStart);
    this.surface.removeEventListener('pointerup', this.onTouchEnd);
    this.surface.removeEventListener('pointercancel', this.onTouchCancel);
    this.canvas.removeEventListener('webglcontextlost', this.onContextLost);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.removeEventListener('change', this.onMotionChange);
  }
}

let instances = [];
function mount() {
  instances = Array.from(
    document.querySelectorAll('[data-login-gallery]'),
    (root) => new LoginGallery(root),
  );
}
mount();
window.addEventListener('pagehide', () => instances.forEach((instance) => instance.dispose()));
window.addEventListener('pageshow', (event) => {
  if (event.persisted) mount();
});
