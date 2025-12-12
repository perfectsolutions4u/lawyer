import {
  animate,
  query,
  sequence,
  style,
  transition,
  trigger
} from "./chunk-JFSHKUAN.js";
import {
  DataService
} from "./chunk-WUPZYAEX.js";
import {
  DomSanitizer,
  RouterLink,
  RouterModule
} from "./chunk-REX7WYYV.js";
import "./chunk-MD53K23M.js";
import {
  ChangeDetectorRef,
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OWUOXPQW.js";

// src/app/components/hero-slider/hero-slider.component.ts
function HeroSliderComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function HeroSliderComponent_button_17_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSlide(i_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r2 === ctx_r2.activeSlideIndex);
    \u0275\u0275attribute("aria-label", "Go to slide " + (i_r2 + 1));
  }
}
var HeroSliderComponent = class _HeroSliderComponent {
  cdr;
  activeSlideIndex = 0;
  autoPlayInterval;
  // Auto-play interval in milliseconds (6000 = 6 seconds, 8000 = 8 seconds)
  // To change slide duration, modify this value
  AUTO_PLAY_INTERVAL = 7e3;
  // Slides data array - modify this to change slide content
  // To replace placeholder images, change imageUrl to your actual image paths
  slides = [
    {
      id: 1,
      imageUrl: "./assets/slider/slide1.webp",
      title: "\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642\u0643 \u0647\u064A \u0623\u0648\u0644\u0648\u064A\u062A\u0646\u0627",
      ctaLabel: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u0623\u0646 ",
      ctaLink: "#contact"
    },
    {
      id: 2,
      imageUrl: "./assets/slider/slide2.webp",
      // badge: '',
      title: "\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u062A\u0645\u062A\u062F \u0644\u0639\u0642\u0648\u062F \u0645\u0646 \u0627\u0644\u0646\u062C\u0627\u062D",
      // description: '',
      ctaLabel: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u0623\u0646 ",
      ctaLink: "#contact"
    },
    {
      id: 3,
      imageUrl: "./assets/slider/slide3.webp",
      // badge: '',
      title: "\u0646\u062D\u0642\u0642 \u0627\u0644\u0639\u062F\u0627\u0644\u0629 \u0648\u0627\u0644\u0625\u0646\u0635\u0627\u0641 \u0644\u0643",
      // description: '',
      ctaLabel: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u0623\u0646 ",
      ctaLink: "#contact"
    },
    {
      id: 4,
      imageUrl: "./assets/slider/slide4.webp",
      // badge: '',
      title: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A",
      // description: '',
      ctaLabel: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
      ctaLink: "#services"
    },
    {
      id: 5,
      imageUrl: "./assets/slider/slide5.webp",
      // badge: '',
      title: "\u062A\u0645\u062B\u064A\u0644 \u0642\u0627\u0646\u0648\u0646\u064A \u0642\u0648\u064A \u0641\u064A \u0627\u0644\u0645\u062D\u0627\u0643\u0645",
      // description: '',
      ctaLabel: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
      ctaLink: "#services"
    },
    {
      id: 6,
      imageUrl: "./assets/slider/slide6.webp",
      // badge: '',
      title: "\u062B\u0642\u062A\u0643 \u0641\u064A\u0646\u0627 \u0647\u064A \u0623\u0633\u0627\u0633 \u0646\u062C\u0627\u062D\u0646\u0627",
      // description: '',
      ctaLabel: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
      ctaLink: "#services"
    }
  ];
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {
    this.startAutoPlay();
  }
  ngOnDestroy() {
    this.stopAutoPlay();
  }
  /**
   * Start auto-play timer
   */
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.AUTO_PLAY_INTERVAL);
  }
  /**
   * Stop auto-play timer
   */
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
  /**
   * Go to specific slide by index
   * @param index - Slide index (0-based)
   */
  goToSlide(index) {
    if (index >= 0 && index < this.slides.length) {
      this.activeSlideIndex = index;
      this.restartAutoPlay();
    }
  }
  /**
   * Go to next slide (with infinite loop)
   */
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    this.restartAutoPlay();
  }
  /**
   * Go to previous slide (with infinite loop)
   */
  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.restartAutoPlay();
  }
  /**
   * Restart auto-play timer
   */
  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
  /**
   * Get current slide
   */
  get currentSlide() {
    return this.slides[this.activeSlideIndex];
  }
  /**
   * Get animation state for current slide
   * This ensures animations restart when slide changes
   */
  get animationState() {
    return `slide-${this.activeSlideIndex}`;
  }
  /**
   * Smooth scroll to section when clicking CTA
   * @param link - The anchor link (e.g., '#tours', '#contact')
   */
  scrollToSection(link) {
    if (link.startsWith("#")) {
      const elementId = link.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }
  static \u0275fac = function HeroSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroSliderComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroSliderComponent, selectors: [["app-hero-slider"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 7, consts: [[1, "hero-slider"], [1, "hero-slide"], [1, "slide-image"], [1, "gradient-overlay"], [1, "hero-content"], [1, "hero-text"], [1, "slide-title"], [1, "slide-cta", "btn-primary", 3, "click", "href"], ["aria-label", "Previous slide", 1, "slider-arrow", "slider-arrow-prev", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M15 18l-6-6 6-6"], ["aria-label", "Next slide", 1, "slider-arrow", "slider-arrow-next", 3, "click"], ["d", "M9 18l6-6-6-6"], [1, "slider-pagination"], ["class", "pagination-bullet", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pagination-bullet", 3, "click"]], template: function HeroSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275listener("click", function HeroSliderComponent_Template_a_click_8_listener($event) {
        ctx.scrollToSection(ctx.currentSlide.ctaLink);
        return $event.preventDefault();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function HeroSliderComponent_Template_button_click_10_listener() {
        return ctx.prevSlide();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function HeroSliderComponent_Template_button_click_13_listener() {
        return ctx.nextSlide();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 9);
      \u0275\u0275element(15, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275template(17, HeroSliderComponent_button_17_Template, 1, 3, "button", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@slideAnimation", ctx.animationState);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background-image", "url(" + ctx.currentSlide.imageUrl + ")");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.currentSlide.title);
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.currentSlide.ctaLink, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentSlide.ctaLabel, " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.slides);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule], styles: ["\n\n.hero-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 99vh;\n  min-height: 600px;\n  overflow: hidden;\n}\n.hero-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slide-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 1;\n}\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      rgba(0, 0, 0, 0.6) 100%);\n  z-index: 2;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  max-width: 1200px;\n  padding: 0 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-text[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  color: #fff;\n  text-align: right;\n  direction: rtl;\n}\n.slide-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1.5rem;\n  background: var(--gradient-primary);\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: var(--radius-full);\n  margin-bottom: 1.5rem;\n  box-shadow: var(--shadow-primary);\n}\n.slide-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0 0 1.5rem 0;\n  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);\n}\n.slide-description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  margin: 0 0 2rem 0;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n.slide-cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1rem 2.5rem;\n  background: var(--gradient-primary);\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-decoration: none;\n  border-radius: var(--radius-full);\n  transition: all var(--transition-base);\n  cursor: pointer;\n  border: none;\n  box-shadow: var(--shadow-primary);\n}\n.slide-cta[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-primary-reverse);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-primary-hover);\n}\n.slide-cta[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.slider-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 4;\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--transition-base);\n  padding: 0;\n}\n.slider-arrow[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-50%) scale(1.1);\n}\n.slider-arrow[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.slider-arrow-prev[_ngcontent-%COMP%] {\n  left: 2rem;\n}\n.slider-arrow-next[_ngcontent-%COMP%] {\n  right: 2rem;\n}\n.slider-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 4;\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.pagination-bullet[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  padding: 0;\n  outline: none;\n}\n.pagination-bullet[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n  transform: scale(1.2);\n}\n.pagination-bullet.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-secondary);\n  width: 14px;\n  height: 14px;\n  box-shadow: 0 0 10px var(--color-primary-rgba-6);\n}\n@media (max-width: 1024px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 85vh;\n    min-height: 550px;\n  }\n  .slide-title[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n  .slide-description[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .slider-arrow-prev[_ngcontent-%COMP%] {\n    left: 1rem;\n  }\n  .slider-arrow-next[_ngcontent-%COMP%] {\n    right: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 500px;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    text-align: center;\n    max-width: 100%;\n  }\n  .slide-badge[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.4rem 1.2rem;\n    margin-bottom: 1rem;\n  }\n  .slide-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n  }\n  .slide-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .slide-cta[_ngcontent-%COMP%] {\n    padding: 0.875rem 2rem;\n    font-size: 1rem;\n  }\n  .hero-slide[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .slide-image[_ngcontent-%COMP%] {\n    height: 90%;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    height: 40%;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n  .slider-arrow[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .slider-arrow-prev[_ngcontent-%COMP%] {\n    left: 0.5rem;\n  }\n  .slider-arrow-next[_ngcontent-%COMP%] {\n    right: 0.5rem;\n  }\n  .slider-pagination[_ngcontent-%COMP%] {\n    bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    min-height: 450px;\n  }\n  .slide-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .slide-description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .slide-cta[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=hero-slider.component.css.map */"], data: { animation: [
    // Main slide animation trigger
    trigger("slideAnimation", [
      transition("* => *", [
        // Image cross-fade animation
        query(".slide-image", [
          style({ opacity: 0, transform: "scale(1.05)" }),
          animate("800ms ease-in-out", style({ opacity: 1, transform: "scale(1)" }))
        ], { optional: true }),
        // Staggered text animations using sequence for proper delays
        sequence([
          // Badge animation (no delay)
          query(".slide-badge", [
            style({ opacity: 0, transform: "translateY(15px) scale(1.2)" }),
            animate("1000ms ease-out", style({ opacity: 1, transform: "translateY(0) scale(1)" }))
          ], { optional: true }),
          // Title animation (200ms delay) - using animate as delay
          animate("200ms", style({})),
          query(".slide-title", [
            style({ opacity: 0, transform: "translateX(-20px) scale(1.2)" }),
            animate("1000ms ease-out", style({ opacity: 1, transform: "translateX(0) scale(1)" }))
          ], { optional: true }),
          // Description animation (200ms additional delay = 400ms total)
          animate("200ms", style({})),
          query(".slide-description", [
            style({ opacity: 0, transform: "scale(1.2)" }),
            animate("600ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
          ], { optional: true }),
          // CTA animation (200ms additional delay = 600ms total)
          animate("200ms", style({})),
          query(".slide-cta", [
            style({ opacity: 0, transform: "scale(0.85)" }),
            animate("500ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
          ], { optional: true })
        ])
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroSliderComponent, { className: "HeroSliderComponent", filePath: "src\\app\\components\\hero-slider\\hero-slider.component.ts", lineNumber: 123 });
})();

// src/app/components/service-icons/service-icons.component.ts
var ServiceIconComponent = class _ServiceIconComponent {
  sanitizer;
  iconName = "";
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  getSafeIconSvg() {
    const svg = this.getIconSvg();
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  getIconSvg() {
    const icons = {
      // تأسيس الشركات - Handshake/Partnership icon
      "company-formation": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50 L35 45 L40 50 L45 45 L50 50 L55 45 L60 50 L75 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="50" r="8" fill="currentColor"/><circle cx="70" cy="50" r="8" fill="currentColor"/><path d="M30 58 L35 65 L40 58 M60 58 L65 65 L70 58" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      // القضايا الرياضية - Stadium/Court building with columns
      "sports-cases": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="60" height="50" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/><line x1="30" y1="35" x2="30" y2="85" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="35" x2="50" y2="85" stroke="currentColor" stroke-width="2.5"/><line x1="70" y1="35" x2="70" y2="85" stroke="currentColor" stroke-width="2.5"/><path d="M25 35 L50 25 L75 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="60" r="5" fill="currentColor"/></svg>`,
      // القانون المدني والجنائي - Briefcase
      "civil-criminal": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="35" width="50" height="40" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M30 35 L30 30 C30 25 35 20 40 20 L60 20 C65 20 70 25 70 30 L70 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 50 L65 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 60 L60 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      // صياغة العقود - Building with document
      "contract-drafting": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="25" width="35" height="45" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M35 35 L60 35 M35 42 L55 42 M35 49 L55 49 M35 56 L50 56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 20 L50 15 L60 20 L60 30 L40 30 Z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 20 L45 30 M50 20 L50 30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      // التحكيم في المنازعات - Open book
      arbitration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 25 L30 75 C30 80 35 85 40 85 L50 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M70 25 L70 75 C70 80 65 85 60 85 L50 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 25 L50 20 L70 25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 40 L45 40 M35 50 L45 50 M35 60 L45 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M55 40 L65 40 M55 50 L65 50 M55 60 L65 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      // الاستشارات القانونية - Open book (different style)
      "legal-consultation": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 20 L35 80 C35 85 40 90 45 90 L50 90" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M65 20 L65 80 C65 85 60 90 55 90 L50 90" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 20 L50 15 L65 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 35 L60 35 M40 45 L60 45 M40 55 L60 55 M40 65 L55 65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="50" cy="75" r="3" fill="currentColor"/></svg>`,
      // تسجيل العلامات التجارية - Pen writing on document
      trademark: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="50" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M35 40 L65 40 M35 50 L60 50 M35 60 L55 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M55 25 L65 20 L70 30 L60 35 Z" fill="currentColor"/><path d="M58 28 L62 32" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      // قضايا مجلس الدولة - Gavel (مطرقة)
      "state-council": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="60" width="50" height="8" rx="2" fill="currentColor"/><path d="M50 25 L50 60" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="45" y="20" width="10" height="15" rx="2" fill="currentColor"/><path d="M20 70 L80 70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      // القضايا العسكرية - Shield
      "military-cases": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L65 25 L70 40 L70 60 L50 85 L30 60 L30 40 L35 25 Z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 30 L50 50 M45 40 L50 50 L55 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 55 L60 55" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 65 L60 65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    };
    return icons[this.iconName] || "";
  }
  static \u0275fac = function ServiceIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceIconComponent)(\u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceIconComponent, selectors: [["app-service-icon"]], inputs: { iconName: "iconName" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "service-icon-wrapper", 3, "innerHTML"]], template: function ServiceIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.getSafeIconSvg(), \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.service-icon-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-icon-wrapper[_ngcontent-%COMP%]     svg {\n  width: 100%;\n  height: 100%;\n  max-width: 80px;\n  max-height: 80px;\n}\n/*# sourceMappingURL=service-icons.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceIconComponent, { className: "ServiceIconComponent", filePath: "src\\app\\components\\service-icons\\service-icons.component.ts", lineNumber: 30 });
})();

// src/app/pages/home/home.component.ts
function HomeComponent_section_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-service-icon", 11);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("iconName", service_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
function HomeComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, HomeComponent_section_1_div_4_Template, 6, 3, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.siteData.services.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.siteData.services.items);
  }
}
function HomeComponent_section_2_div_4_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r3);
  }
}
function HomeComponent_section_2_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, HomeComponent_section_2_div_4_div_1_span_2_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 22);
    \u0275\u0275text(8, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", project_r4.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r4.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/project/" + project_r4.id);
  }
}
function HomeComponent_section_2_div_4_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5);
  }
}
function HomeComponent_section_2_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, HomeComponent_section_2_div_4_div_3_span_2_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 22);
    \u0275\u0275text(8, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", project_r4.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r4.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/project/" + project_r4.id);
  }
}
function HomeComponent_section_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, HomeComponent_section_2_div_4_div_1_Template, 9, 4, "div", 16);
    \u0275\u0275element(2, "div", 17);
    \u0275\u0275template(3, HomeComponent_section_2_div_4_div_3_Template, 9, 4, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275classMap(project_r4.imagePosition === "left" ? "image-left" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r4.imagePosition !== "left");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + project_r4.image + ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r4.imagePosition === "left");
  }
}
function HomeComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275template(4, HomeComponent_section_2_div_4_Template, 4, 6, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.siteData.projects.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.siteData.projects.items.slice(0, 5));
  }
}
function HomeComponent_section_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.description);
  }
}
function HomeComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275template(4, HomeComponent_section_3_div_4_Template, 8, 3, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.siteData.timeline.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.siteData.timeline.items);
  }
}
function HomeComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29)(1, "div", 30)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.siteData.cta.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.siteData.cta.subtitle);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.siteData.cta.button.url.replace(".html", ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.siteData.cta.button.text, " ");
  }
}
function HomeComponent_section_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.siteData == null ? null : ctx_r1.siteData.team == null ? null : ctx_r1.siteData.team.subtitle, " ");
  }
}
function HomeComponent_section_5_div_4_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r7.name.charAt(0), " ");
  }
}
function HomeComponent_section_5_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275element(3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HomeComponent_section_5_div_4_div_1_div_4_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "h3", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + (member_r7.image || "") + ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !member_r7.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.specialization);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.experience);
  }
}
function HomeComponent_section_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, HomeComponent_section_5_div_4_div_1_Template, 14, 7, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.siteData == null ? null : ctx_r1.siteData.team == null ? null : ctx_r1.siteData.team.members);
  }
}
function HomeComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 33)(1, "h2", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HomeComponent_section_5_p_3_Template, 2, 1, "p", 35)(4, HomeComponent_section_5_div_4_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.siteData == null ? null : ctx_r1.siteData.team == null ? null : ctx_r1.siteData.team.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.siteData == null ? null : ctx_r1.siteData.team == null ? null : ctx_r1.siteData.team.subtitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.siteData == null ? null : ctx_r1.siteData.team == null ? null : ctx_r1.siteData.team.members);
  }
}
function HomeComponent_section_6_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 56);
    \u0275\u0275element(1, "div", 57);
    \u0275\u0275elementStart(2, "div", 58)(3, "div", 59)(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275element(7, "i", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 64);
    \u0275\u0275text(14, " \u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F ");
    \u0275\u0275element(15, "i", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + post_r8.image + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r8.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r8.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r8.excerpt);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/blog/" + post_r8.id);
  }
}
function HomeComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 51)(1, "h2", 7);
    \u0275\u0275text(2, "\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275template(4, HomeComponent_section_6_article_4_Template, 16, 7, "article", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "a", 55);
    \u0275\u0275text(7, "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.siteData.blog.items.slice(0, 3));
  }
}
var HomeComponent = class _HomeComponent {
  dataService = inject(DataService);
  siteData = null;
  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initScrollAnimations();
      this.initNavbarScroll();
      this.initParallax();
    }, 500);
  }
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll(".section-title").forEach((title, index) => {
      setTimeout(() => observer.observe(title), index * 200);
    });
    setTimeout(() => {
      document.querySelectorAll(".service-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);
    setTimeout(() => {
      document.querySelectorAll(".project-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 150);
      });
    }, 500);
    setTimeout(() => {
      document.querySelectorAll(".timeline-item").forEach((item, index) => {
        setTimeout(() => observer.observe(item), index * 200);
      });
    }, 500);
    const ctaSection = document.querySelector(".cta-section");
    if (ctaSection)
      observer.observe(ctaSection);
    setTimeout(() => {
      document.querySelectorAll(".review-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);
    setTimeout(() => {
      document.querySelectorAll(".team-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 150);
      });
    }, 500);
  }
  initNavbarScroll() {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
    });
  }
  initParallax() {
    const waveBg = document.querySelector(".wave-bg");
    if (!waveBg)
      return;
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxSpeed = 0.3;
          if (scrolled < window.innerHeight) {
            waveBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 6, consts: [["class", "services container", 4, "ngIf"], ["class", "projects container", 4, "ngIf"], ["class", "timeline-section container", 4, "ngIf"], ["class", "cta-section", 4, "ngIf"], ["class", "team-section container", 4, "ngIf"], ["class", "blog-preview container", 4, "ngIf"], [1, "services", "container"], [1, "section-title"], [1, "services-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "service-icon", 3, "iconName"], [1, "projects", "container"], [1, "projects-list"], ["class", "project-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "project-card"], ["class", "project-info", 4, "ngIf"], [1, "project-img"], [1, "project-info"], [1, "tags"], [4, "ngFor", "ngForOf"], [2, "color", "#aaa", "margin-bottom", "20px"], [1, "btn", "btn-primary", 2, "align-self", "flex-start", 3, "routerLink"], [1, "timeline-section", "container"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-content"], [1, "timeline-year"], [1, "cta-section"], [1, "container"], [2, "color", "#aaa", "margin", "15px 0 25px"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "team-section", "container"], [1, "section-title", "mb-3"], ["class", "team-subtitle", 4, "ngIf"], ["class", "team-grid mt-5", 4, "ngIf"], [1, "team-subtitle"], [1, "team-grid", "mt-5"], ["class", "team-card", 4, "ngFor", "ngForOf"], [1, "team-card"], [1, "team-image-wrapper"], [1, "team-image"], [1, "team-overlay"], ["class", "team-initial", 4, "ngIf"], [1, "team-info"], [1, "team-name"], [1, "team-position"], [1, "team-specialization"], [1, "team-experience"], [1, "team-initial"], [1, "blog-preview", "container"], [1, "blog-preview-grid"], ["class", "blog-preview-card", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-top", "40px"], ["routerLink", "/blog", 1, "btn", "btn-outline"], [1, "blog-preview-card"], [1, "blog-preview-image"], [1, "blog-preview-content"], [1, "blog-preview-meta"], [1, "blog-preview-category"], [2, "display", "flex", "align-items", "center", "gap", "5px"], [1, "far", "fa-calendar"], [1, "blog-preview-excerpt"], [1, "blog-preview-link", 3, "routerLink"], [1, "fas", "fa-arrow-left"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero-slider");
      \u0275\u0275template(1, HomeComponent_section_1_Template, 5, 2, "section", 0)(2, HomeComponent_section_2_Template, 5, 2, "section", 1)(3, HomeComponent_section_3_Template, 5, 2, "section", 2)(4, HomeComponent_section_4_Template, 8, 4, "section", 3)(5, HomeComponent_section_5_Template, 5, 3, "section", 4)(6, HomeComponent_section_6_Template, 8, 1, "section", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData == null ? null : ctx.siteData.team);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    HeroSliderComponent,
    ServiceIconComponent
  ], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background:\n    radial-gradient(\n      circle at top,\n      #1a1a2e 0%,\n      var(--bg-color) 70%);\n  overflow: hidden;\n}\n.wave-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop);\n  background-size: cover;\n  background-position: center;\n  opacity: 0.2;\n  z-index: 1;\n  mix-blend-mode: screen;\n  animation: _ngcontent-%COMP%_slowZoom 20s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_slowZoom {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\nheader[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image:\n    radial-gradient(\n      2px 2px at 20% 30%,\n      var(--color-primary-rgba-3),\n      transparent),\n    radial-gradient(\n      2px 2px at 60% 70%,\n      var(--color-primary-rgba-2),\n      transparent),\n    radial-gradient(\n      1px 1px at 50% 50%,\n      var(--color-secondary-rgba-4),\n      transparent),\n    radial-gradient(\n      1px 1px at 80% 10%,\n      var(--color-primary-rgba-3),\n      transparent),\n    radial-gradient(\n      2px 2px at 90% 80%,\n      var(--color-secondary-rgba-2),\n      transparent);\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_floatParticles 20s ease-in-out infinite;\n  z-index: 1;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_floatParticles {\n  0%, 100% {\n    background-position:\n      0% 0%,\n      100% 100%,\n      50% 50%,\n      0% 100%,\n      100% 0%;\n  }\n  50% {\n    background-position:\n      100% 100%,\n      0% 0%,\n      50% 50%,\n      100% 0%,\n      0% 100%;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  z-index: 2;\n  max-width: 800px;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.2;\n  margin-bottom: 20px;\n  background:\n    linear-gradient(\n      to bottom,\n      #fff,\n      #ccc);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  opacity: 0;\n  transform: translateY(50px);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.3s forwards;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  margin-bottom: 30px;\n  opacity: 0;\n  transform: translateY(30px);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.6s forwards;\n}\n.hero-btns[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(30px);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.9s forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.services[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  padding: 30px;\n  border-radius: 15px;\n  position: relative;\n  opacity: 0;\n  transform: translateY(50px) scale(0.95);\n  transition: all var(--transition-slowest-cubic);\n}\n.service-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.service-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  color: var(--color-secondary);\n  margin-bottom: 15px;\n  transition: all var(--transition-slowest);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n  color: var(--color-primary-light);\n}\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: var(--text-muted);\n}\n@media (max-width: 1024px) {\n  .service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n@media (max-width: 768px) {\n  .service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.team-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  margin-bottom: 3rem;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n.team-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: all var(--transition-medium-cubic);\n  opacity: 0;\n  transform: translateY(30px) scale(0.95);\n  position: relative;\n}\n.team-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.team-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-primary-hover);\n}\n.team-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 280px;\n  overflow: hidden;\n  background: var(--gradient-primary);\n}\n.team-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  transition: transform var(--transition-medium);\n  position: relative;\n  -webkit-transition: transform var(--transition-medium);\n  -moz-transition: transform var(--transition-medium);\n  -ms-transition: transform var(--transition-medium);\n  -o-transition: transform var(--transition-medium);\n}\n.team-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(0, 0, 0, 0.3) 100%);\n  z-index: 1;\n}\n.team-card[_ngcontent-%COMP%]:hover   .team-image[_ngcontent-%COMP%] {\n  transform: scale(1.05) rotate(1deg);\n  -webkit-transform: scale(1.05) rotate(1deg);\n  -moz-transform: scale(1.05) rotate(1deg);\n  -ms-transform: scale(1.05) rotate(1deg);\n  -o-transform: scale(1.05) rotate(1deg);\n}\n.team-initial[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  font-weight: var(--font-weight-bold);\n  color: #fff;\n  z-index: 2;\n  box-shadow: var(--shadow-primary);\n}\n.team-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n}\n.team-name[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: var(--font-weight-bold);\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n  transition: color var(--transition-base);\n}\n.team-card[_ngcontent-%COMP%]:hover   .team-name[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n.team-position[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-secondary);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: 0.5rem;\n}\n.team-specialization[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n  line-height: 1.5;\n}\n.team-experience[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.4rem 1rem;\n  background: var(--color-primary-rgba-1);\n  color: var(--color-primary);\n  border-radius: var(--radius-full);\n  font-size: 0.85rem;\n  font-weight: var(--font-weight-medium);\n}\n@media (max-width: 1024px) {\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .team-section[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1.5rem;\n  }\n  .team-image-wrapper[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .team-initial[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-image-wrapper[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .team-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .team-position[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .team-specialization[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n.projects[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid var(--border-color);\n  margin-bottom: 30px;\n  opacity: 0;\n  transform: translateX(-50px);\n  transition: all var(--transition-medium-cubic);\n}\n.project-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.project-card[_ngcontent-%COMP%]:nth-child(even) {\n  transform: translateX(50px);\n}\n.project-card[_ngcontent-%COMP%]:nth-child(even).visible {\n  transform: translateX(0);\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.01);\n  border-color: var(--primary-accent);\n  box-shadow: 0 20px 50px rgba(var(--color-primary-rgb), 0.3);\n}\n.project-info[_ngcontent-%COMP%] {\n  padding: 40px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.project-img[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #222;\n  background-size: cover;\n  background-position: center;\n  min-height: 300px;\n  transition: transform var(--transition-medium);\n  position: relative;\n  overflow: hidden;\n}\n.project-img[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--color-primary-rgb), 0.1) 0%,\n      transparent 100%);\n  opacity: 0;\n  transition: opacity var(--transition-slowest);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-img[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb), 0.1);\n  color: var(--primary-accent);\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  margin-left: 5px;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.timeline[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 2px;\n  background-color: var(--primary-accent);\n  top: 0;\n  bottom: 0;\n  right: 20px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_timelineLine 1s ease-out 0.5s forwards;\n}\n@keyframes _ngcontent-%COMP%_timelineLine {\n  from {\n    height: 0;\n    opacity: 0;\n  }\n  to {\n    height: 100%;\n    opacity: 1;\n  }\n}\n.timeline-item[_ngcontent-%COMP%] {\n  padding: 10px 60px 40px 10px;\n  position: relative;\n  background-color: inherit;\n  width: 100%;\n  opacity: 0;\n  transform: translateX(-30px);\n  transition: all var(--transition-medium-cubic);\n}\n.timeline-item.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.timeline-item[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 20px;\n  border: 22px solid;\n  border-color: transparent var(--primary-accent) transparent transparent;\n  top: 15px;\n  z-index: 1;\n  transition: all var(--transition-base);\n}\n.timeline-item[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(-12px) scale(1.5);\n  -webkit-transform: translateX(-12px) scale(1.5);\n  -moz-transform: translateX(-12px) scale(1.5);\n  -ms-transform: translateX(-12px) scale(1.5);\n  -o-transform: translateX(-12px) scale(1.5);\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  transition: all var(--transition-base);\n}\n.timeline-item[_ngcontent-%COMP%]:hover   .timeline-content[_ngcontent-%COMP%] {\n  transform: translateX(-10px);\n  border-color: var(--primary-accent);\n  box-shadow: 0 10px 30px rgba(var(--color-primary-rgb), 0.2);\n}\n.timeline-year[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: block;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      90deg,\n      #0f1016 0%,\n      #1a1b26 100%);\n  margin: 40px 0;\n  border-top: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(var(--color-primary-rgb), 0.1) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.testimonials[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.review-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 25px;\n  border-radius: 15px;\n  border: 1px solid #222;\n  opacity: 0;\n  transform: translateY(40px) scale(0.95);\n  transition: all var(--transition-medium-cubic);\n}\n.review-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.stars[_ngcontent-%COMP%] {\n  color: gold;\n  margin-bottom: 10px;\n  font-size: 0.8rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #333;\n  margin-left: 10px;\n}\n.blog-preview[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.blog-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 30px;\n  margin-top: 40px;\n}\n.blog-preview-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  transition: all var(--transition-medium-cubic);\n  opacity: 0;\n  transform: translateY(50px);\n  display: flex;\n  flex-direction: column;\n}\n.blog-preview-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.blog-preview-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  border-color: var(--primary-accent);\n  box-shadow: 0 20px 50px rgba(var(--color-primary-rgb), 0.3);\n}\n.blog-preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n.blog-preview-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.blog-preview-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.blog-preview-category[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb), 0.1);\n  color: var(--primary-accent);\n  padding: 4px 10px;\n  border-radius: 15px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.blog-preview-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 12px;\n  transition: color var(--transition-base);\n  line-height: 1.4;\n}\n.blog-preview-card[_ngcontent-%COMP%]:hover   .blog-preview-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n}\n.blog-preview-excerpt[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.7;\n  margin-bottom: 15px;\n  flex: 1;\n  font-size: 0.9rem;\n}\n.blog-preview-link[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: gap var(--transition-base);\n  font-size: 0.9rem;\n}\n.blog-preview-link[_ngcontent-%COMP%]:hover {\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .project-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .project-img[_ngcontent-%COMP%] {\n    height: 250px;\n    min-height: 250px;\n  }\n  .services-grid[_ngcontent-%COMP%], \n   .review-grid[_ngcontent-%COMP%], \n   .blog-preview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 21 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-SKZAF2PG.js.map
