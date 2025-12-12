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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OWUOXPQW.js";

// src/app/pages/projects/projects.component.ts
function ProjectsComponent_section_6_div_4_div_1_span_2_Template(rf, ctx) {
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
function ProjectsComponent_section_6_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, ProjectsComponent_section_6_div_4_div_1_span_2_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 17);
    \u0275\u0275text(8, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", project_r2.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/project/" + project_r2.id);
  }
}
function ProjectsComponent_section_6_div_4_div_3_span_2_Template(rf, ctx) {
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
function ProjectsComponent_section_6_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, ProjectsComponent_section_6_div_4_div_3_span_2_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 17);
    \u0275\u0275text(8, "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", project_r2.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/project/" + project_r2.id);
  }
}
function ProjectsComponent_section_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, ProjectsComponent_section_6_div_4_div_1_Template, 9, 4, "div", 11);
    \u0275\u0275element(2, "div", 12);
    \u0275\u0275template(3, ProjectsComponent_section_6_div_4_div_3_Template, 9, 4, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275classMap(project_r2.imagePosition === "left" ? "image-left" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.imagePosition !== "left");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + project_r2.image + ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.imagePosition === "left");
  }
}
function ProjectsComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, ProjectsComponent_section_6_div_4_Template, 4, 6, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.siteData.projects.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.siteData.projects.items);
  }
}
var ProjectsComponent = class _ProjectsComponent {
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
      document.querySelectorAll(".project-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 150);
      });
    }, 500);
  }
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [[1, "page-header"], [1, "container"], ["class", "projects container", 4, "ngIf"], [1, "cta-section"], [2, "color", "#aaa", "margin", "15px 0 25px"], ["routerLink", "/contact", 1, "btn", "btn-primary"], [1, "projects", "container"], [1, "section-title"], [1, "projects-list"], ["class", "project-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "project-card"], ["class", "project-info", 4, "ngIf"], [1, "project-img"], [1, "project-info"], [1, "tags"], [4, "ngFor", "ngForOf"], [2, "color", "#aaa", "margin-bottom", "20px"], [1, "btn", "btn-primary", 2, "align-self", "flex-start", 3, "routerLink"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "\u0625\u0646\u062C\u0627\u0632\u0627\u062A\u0646\u0627 \u062A\u062A\u062D\u062F\u062B \u0639\u0646 \u062C\u0648\u062F\u0629 \u0639\u0645\u0644\u0646\u0627");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, ProjectsComponent_section_6_Template, 5, 2, "section", 2);
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 1)(9, "h2");
      \u0275\u0275text(10, "\u0647\u0644 \u0644\u062F\u064A\u0643 \u0645\u0634\u0631\u0648\u0639 \u0641\u064A \u0630\u0647\u0646\u0643\u061F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 4);
      \u0275\u0275text(12, "\u062F\u0639\u0646\u0627 \u0646\u0646\u0627\u0642\u0634 \u0641\u0643\u0631\u062A\u0643 \u0648\u0646\u062D\u0648\u0644\u0647\u0627 \u0625\u0644\u0649 \u0648\u0627\u0642\u0639 \u0631\u0642\u0645\u064A \u0645\u062A\u0645\u064A\u0632");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 5);
      \u0275\u0275text(14, "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643 \u0627\u0644\u0622\u0646");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 120px 0 60px;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./media/banner.webp");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 60vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.projects[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid var(--border-color);\n  margin-bottom: 40px;\n  transition: all var(--transition-medium-cubic);\n  opacity: 0;\n  transform: translateX(-50px);\n}\n.project-card.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.project-card[_ngcontent-%COMP%]:nth-child(even) {\n  transform: translateX(50px);\n}\n.project-card[_ngcontent-%COMP%]:nth-child(even).visible {\n  transform: translateX(0);\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.01);\n  border-color: var(--primary-accent);\n  box-shadow: 0 20px 50px rgba(var(--color-primary-rgb), 0.3);\n}\n.project-info[_ngcontent-%COMP%] {\n  padding: 40px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.project-img[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #222;\n  background-size: cover;\n  background-position: center;\n  min-height: 300px;\n  transition: transform var(--transition-medium);\n  position: relative;\n  overflow: hidden;\n}\n.project-img[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--color-primary-rgb), 0.1) 0%,\n      transparent 100%);\n  opacity: 0;\n  transition: opacity var(--transition-slowest);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-img[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb), 0.1);\n  color: var(--primary-accent);\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  margin-left: 5px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      90deg,\n      var(--card-bg) 0%,\n      rgba(var(--color-primary-rgb), 0.1) 100%);\n  margin: 40px 0;\n}\n@media (max-width: 768px) {\n  .project-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .project-img[_ngcontent-%COMP%] {\n    height: 250px;\n    min-height: 250px;\n  }\n}\n/*# sourceMappingURL=projects.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\pages\\projects\\projects.component.ts", lineNumber: 14 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-DAQDDC6T.js.map
