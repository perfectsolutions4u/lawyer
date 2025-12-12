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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OWUOXPQW.js";

// src/app/pages/blog/blog.component.ts
function BlogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.blog.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.blog.subtitle);
  }
}
function BlogComponent_section_2_article_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2);
  }
}
function BlogComponent_section_2_article_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275element(7, "i", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17);
    \u0275\u0275template(17, BlogComponent_section_2_article_2_span_17_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 19);
    \u0275\u0275text(19, " \u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F ");
    \u0275\u0275element(20, "i", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + post_r3.image + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r3.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r3.date, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r3.readTime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.excerpt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", post_r3.tags);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/blog/" + post_r3.id);
  }
}
function BlogComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5);
    \u0275\u0275template(2, BlogComponent_section_2_article_2_Template, 21, 9, "article", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.blog.items);
  }
}
var BlogComponent = class _BlogComponent {
  dataService = inject(DataService);
  siteData = null;
  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }
  static \u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "page-header"], ["class", "container", 4, "ngIf"], ["class", "blog-section container", 4, "ngIf"], [1, "container"], [1, "blog-section", "container"], ["id", "blogGrid", 1, "blog-grid"], ["class", "blog-card", 4, "ngFor", "ngForOf"], [1, "blog-card"], [1, "blog-image"], [1, "blog-content"], [1, "blog-meta"], [1, "blog-category"], [1, "blog-date"], [1, "far", "fa-calendar"], [1, "blog-read-time"], [1, "far", "fa-clock"], [1, "blog-excerpt"], [1, "blog-tags"], ["class", "blog-tag", 4, "ngFor", "ngForOf"], [1, "blog-link", 3, "routerLink"], [1, "fas", "fa-arrow-left"], [1, "blog-tag"]], template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, BlogComponent_div_1_Template, 5, 2, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, BlogComponent_section_2_Template, 3, 1, "section", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 120px 0 60px;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./media/banner.webp");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 60vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.blog-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.blog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 30px;\n}\n.blog-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  transition: all var(--transition-medium-cubic);\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  border-color: var(--primary-accent);\n  box-shadow: 0 20px 50px rgba(var(--color-primary-rgb), 0.3);\n}\n.blog-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n}\n.blog-content[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 15px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n}\n.blog-category[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb), 0.1);\n  color: var(--primary-accent);\n  padding: 4px 10px;\n  border-radius: 15px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.7;\n  margin: 15px 0;\n}\n.blog-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin: 15px 0;\n}\n.blog-tag[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb), 0.1);\n  color: var(--primary-accent);\n  padding: 4px 10px;\n  border-radius: 5px;\n  font-size: 0.75rem;\n}\n.blog-link[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: gap var(--transition-base);\n}\n.blog-link[_ngcontent-%COMP%]:hover {\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=blog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src\\app\\pages\\blog\\blog.component.ts", lineNumber: 14 });
})();
export {
  BlogComponent
};
//# sourceMappingURL=chunk-ATI2ZNGH.js.map
