import {
  DataService
} from "./chunk-WUPZYAEX.js";
import {
  RouterLink,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OWUOXPQW.js";

// src/app/pages/services/services.component.ts
function ServicesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u062A\u062D\u0648\u064A\u0644 \u0623\u0641\u0643\u0627\u0631\u0643 \u0625\u0644\u0649 \u0648\u0627\u0642\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.services.title);
  }
}
function ServicesComponent_section_2_div_2_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r2);
  }
}
function ServicesComponent_section_2_div_2_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 12);
    \u0275\u0275template(1, ServicesComponent_section_2_div_2_ul_6_li_1_Template, 2, 1, "li", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", service_r3.features);
  }
}
function ServicesComponent_section_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ServicesComponent_section_2_div_2_ul_6_Template, 2, 1, "ul", 11);
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275text(8, "\u0627\u0637\u0644\u0628 \u0627\u0644\u062E\u062F\u0645\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(service_r3.icon + " service-icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.features);
  }
}
function ServicesComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8);
    \u0275\u0275template(2, ServicesComponent_section_2_div_2_Template, 9, 5, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.services.items);
  }
}
var ServicesComponent = class _ServicesComponent {
  dataService = inject(DataService);
  siteData = null;
  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll(".service-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);
  }
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "page-header"], ["class", "container", 4, "ngIf"], ["class", "services container", 4, "ngIf"], [1, "cta-section"], [1, "container"], [2, "color", "#aaa", "margin", "15px 0 25px"], ["routerLink", "/contact", 1, "btn", "btn-primary"], [1, "services", "container"], [1, "services-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], ["class", "service-features", 4, "ngIf"], [1, "service-features"], [4, "ngFor", "ngForOf"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, ServicesComponent_div_1_Template, 5, 1, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, ServicesComponent_section_2_Template, 3, 1, "section", 2);
      \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062E\u062F\u0645\u0629 \u0645\u062E\u0635\u0635\u0629\u061F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0645\u0646\u0627\u0642\u0634\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643 \u0627\u0644\u062E\u0627\u0635\u0629 \u0648\u0646\u0642\u062F\u0645 \u0644\u0643 \u0627\u0644\u062D\u0644 \u0627\u0644\u0623\u0645\u062B\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 120px 0 60px;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./media/banner.webp");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 60vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 15px;\n}\n.services[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 30px;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  padding: 40px;\n  border-radius: 15px;\n  position: relative;\n  transition: all var(--transition-slowest-cubic);\n  opacity: 0;\n  transform: translateY(50px) scale(0.95);\n}\n.service-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  border-color: var(--primary-accent);\n  box-shadow: 0 15px 40px rgba(var(--color-primary-rgb), 0.3);\n}\n.service-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-accent);\n  margin-bottom: 20px;\n  transition: all var(--transition-slowest);\n  display: inline-block;\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n  color: var(--color-primary-light);\n}\n.service-features[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 20px 0;\n}\n.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 10px;\n  padding-right: 20px;\n  position: relative;\n}\n.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  right: 0;\n  color: var(--primary-accent);\n  font-weight: bold;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      90deg,\n      var(--card-bg) 0%,\n      rgba(var(--color-primary-rgb), 0.1) 100%);\n  margin: 40px 0;\n}\n@media (max-width: 768px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src\\app\\pages\\services\\services.component.ts", lineNumber: 14 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-SUORZT4P.js.map
