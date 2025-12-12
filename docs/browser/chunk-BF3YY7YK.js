import {
  DataService
} from "./chunk-WUPZYAEX.js";
import {
  ActivatedRoute,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OWUOXPQW.js";

// src/app/pages/project-detail/project-detail.component.ts
function ProjectDetailComponent_article_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function ProjectDetailComponent_article_0_div_13_div_24_li_4_Template(rf, ctx) {
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
function ProjectDetailComponent_article_0_div_13_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2, "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, ProjectDetailComponent_article_0_div_13_div_24_li_4_Template, 2, 1, "li", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.project.details.features);
  }
}
function ProjectDetailComponent_article_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "strong");
    \u0275\u0275text(6, "\u0627\u0644\u0639\u0645\u064A\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "strong");
    \u0275\u0275text(11, "\u0627\u0644\u0645\u062F\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "strong");
    \u0275\u0275text(16, "\u0627\u0644\u0641\u0631\u064A\u0642:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "strong");
    \u0275\u0275text(21, "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ProjectDetailComponent_article_0_div_13_div_24_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.project.details.client);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.project.details.duration);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.project.details.team);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.project.details.technologies == null ? null : ctx_r2.project.details.technologies.join(", "));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.project.details.features);
  }
}
function ProjectDetailComponent_article_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 1)(1, "div", 2)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275template(8, ProjectDetailComponent_article_0_span_8_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 6);
    \u0275\u0275elementStart(10, "div", 7)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProjectDetailComponent_article_0_div_13_Template, 25, 5, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9)(15, "a", 10);
    \u0275\u0275text(16, "\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.project.tags);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r2.project.image + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.project.details);
  }
}
var ProjectDetailComponent = class _ProjectDetailComponent {
  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  siteData = null;
  project = null;
  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get("id");
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
      this.project = data.projects.items.find((p) => p.id === projectId);
    });
  }
  static \u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "project-detail container", 4, "ngIf"], [1, "project-detail", "container"], [1, "project-detail-header"], [1, "project-detail-meta"], [1, "tags"], [4, "ngFor", "ngForOf"], [1, "project-detail-image"], [1, "project-detail-content"], ["class", "project-details", 4, "ngIf"], [1, "project-detail-footer"], ["routerLink", "/projects", 1, "btn", "btn-outline"], [1, "project-details"], [1, "detail-grid"], [1, "detail-item"], ["class", "project-features", 4, "ngIf"], [1, "project-features"]], template: function ProjectDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProjectDetailComponent_article_0_Template, 17, 7, "article", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.project);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.project-detail[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.project-detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.project-detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n.project-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n  color: var(--text-muted);\n}\n.project-detail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  margin-bottom: 40px;\n}\n.project-detail-content[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  font-size: 1.1rem;\n}\n.project-details[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin: 30px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n}\n.detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--primary-accent);\n  margin-bottom: 10px;\n}\n.project-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.project-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  padding-right: 25px;\n  position: relative;\n}\n.project-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  right: 0;\n  color: var(--primary-accent);\n  font-weight: bold;\n}\n.project-detail-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 40px;\n  border-top: 1px solid var(--border-color);\n  margin-top: 40px;\n}\n@media (max-width: 768px) {\n  .project-detail[_ngcontent-%COMP%] {\n    padding: 100px 0 60px;\n  }\n  .project-detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .project-detail-image[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=project-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src\\app\\pages\\project-detail\\project-detail.component.ts", lineNumber: 14 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-BF3YY7YK.js.map
