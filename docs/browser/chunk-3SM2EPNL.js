import {
  DataService
} from "./chunk-WUPZYAEX.js";
import {
  RouterModule
} from "./chunk-REX7WYYV.js";
import "./chunk-MD53K23M.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OWUOXPQW.js";

// src/app/pages/about/about.component.ts
function AboutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.about.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.about.subtitle);
  }
}
function AboutComponent_section_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 10);
  }
  if (rf & 2) {
    const desc_r2 = ctx.$implicit;
    \u0275\u0275property("innerHTML", desc_r2, \u0275\u0275sanitizeHtml);
  }
}
function AboutComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8);
    \u0275\u0275template(2, AboutComponent_section_2_p_2_Template, 1, 1, "p", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.about.description);
  }
}
function AboutComponent_section_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
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
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.description);
  }
}
function AboutComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275template(4, AboutComponent_section_3_div_4_Template, 8, 3, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.timeline.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.timeline.items);
  }
}
function AboutComponent_section_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(value_r4.icon + " value-icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r4.description);
  }
}
function AboutComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 6)(2, "h2", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275template(5, AboutComponent_section_4_div_5_Template, 6, 4, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.siteData.about.values.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.about.values.items);
  }
}
function AboutComponent_section_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.siteData.about.team.subtitle, " ");
  }
}
function AboutComponent_section_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", member_r5.name);
    \u0275\u0275property("src", member_r5.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r5.position, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r5.description, " ");
  }
}
function AboutComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "h2", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AboutComponent_section_5_p_3_Template, 2, 1, "p", 24);
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275template(5, AboutComponent_section_5_div_5_Template, 9, 5, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.about.team.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.siteData.about.team.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.about.team.members);
  }
}
var AboutComponent = class _AboutComponent {
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
    }, 500);
  }
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".section-title, .stat-card, .timeline-item, .team-member, .value-card, .about-text").forEach((el, index) => {
      setTimeout(() => observer.observe(el), index * 100);
    });
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 5, consts: [[1, "page-header"], ["class", "container", 4, "ngIf"], ["class", "about-content container", 4, "ngIf"], ["class", "timeline-section container", 4, "ngIf"], ["class", "values-section", 4, "ngIf"], ["class", "team-section container", 4, "ngIf"], [1, "container"], [1, "about-content", "container"], [1, "about-text"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "timeline-section", "container"], [1, "section-title"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-content"], [1, "timeline-year"], [1, "values-section"], [1, "values-grid"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "value-card"], [1, "team-section", "container"], [1, "section-title", "mb-3"], ["class", "team-subtitle text-center", 4, "ngIf"], [1, "team-grid"], ["class", "team-member", 4, "ngFor", "ngForOf"], [1, "team-subtitle", "text-center"], [1, "team-member"], [1, "team-avatar", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [2, "color", "var(--primary-accent)", "margin", "10px 0"], [2, "color", "var(--text-muted)", "font-size", "0.9rem"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, AboutComponent_div_1_Template, 5, 2, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AboutComponent_section_2_Template, 3, 1, "section", 2)(3, AboutComponent_section_3_Template, 5, 2, "section", 3)(4, AboutComponent_section_4_Template, 6, 2, "section", 4)(5, AboutComponent_section_5_Template, 6, 3, "section", 5);
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
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 120px 0 60px;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./media/banner.webp");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 60vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image:\n    radial-gradient(\n      2px 2px at 20% 30%,\n      var(--color-primary-rgba-3),\n      transparent),\n    radial-gradient(\n      2px 2px at 60% 70%,\n      var(--color-secondary-rgba-2),\n      transparent);\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_floatParticles 20s ease-in-out infinite;\n  z-index: 1;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_floatParticles {\n  0%, 100% {\n    background-position: 0% 0%, 100% 100%;\n  }\n  50% {\n    background-position: 100% 100%, 0% 0%;\n  }\n}\n.page-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 15px;\n  opacity: 0;\n  transform: translateY(50px);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.3s forwards;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  opacity: 0;\n  transform: translateY(30px);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.6s forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.about-content[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.about-text[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 60px;\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  line-height: 1.8;\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all var(--transition-slower);\n}\n.about-text.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 30px;\n  margin: 60px 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  background: var(--card-bg);\n  border-radius: 15px;\n  border: 1px solid var(--border-color);\n  opacity: 0;\n  transform: translateY(40px) scale(0.95);\n  transition: all var(--transition-medium-cubic);\n}\n.stat-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--primary-accent);\n  margin-bottom: 10px;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.timeline[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 2px;\n  background-color: var(--secondary-accent);\n  top: 0;\n  bottom: 0;\n  right: 20px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  padding: 10px 60px 40px 10px;\n  position: relative;\n  background-color: inherit;\n  width: 100%;\n  opacity: 0;\n  transform: translateX(-30px);\n  transition: all var(--transition-medium-cubic);\n}\n.timeline-item.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.timeline-item[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  right: 13px;\n  background-color: var(--bg-color);\n  border: 4px solid var(--primary-accent);\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n}\n.timeline-year[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: block;\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      90deg,\n      #0f1016 0%,\n      #1a1b26 100%);\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 30px;\n  border-radius: 15px;\n  border: 1px solid var(--border-color);\n  opacity: 0;\n  transform: translateY(40px) scale(0.95);\n  transition: all var(--transition-medium-cubic);\n}\n.value-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary-accent);\n  margin-bottom: 20px;\n  transition: all var(--transition-base);\n}\n.value-card[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n  color: var(--color-primary-light);\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n  margin-top: 40px;\n}\n.team-member[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 30px;\n  border-radius: 15px;\n  border: 1px solid var(--border-color);\n  text-align: center;\n  transition: all var(--transition-slowest-cubic);\n  opacity: 0;\n  transform: translateY(40px) scale(0.95);\n}\n.team-member.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.team-member[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.team-avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent),\n      rgba(var(--color-primary-rgb), 0.5));\n  margin: 0 auto 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  color: white;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n    margin-top: 70px;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .team-grid[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\about\\about.component.ts", lineNumber: 14 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-3SM2EPNL.js.map
