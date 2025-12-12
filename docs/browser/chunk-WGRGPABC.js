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
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OWUOXPQW.js";

// src/app/pages/blog-detail/blog-detail.component.ts
function BlogDetailComponent_article_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function BlogDetailComponent_article_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 1)(1, "div", 2)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275element(8, "i", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "div", 8)(17, "div", 9);
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275template(19, BlogDetailComponent_article_0_span_19_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12)(21, "a", 13);
    \u0275\u0275text(22, "\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0648\u0646\u0629");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.post.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.post.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.post.date, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.post.readTime, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.post.author, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.post.image + ")");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.post.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.post.tags);
  }
}
var BlogDetailComponent = class _BlogDetailComponent {
  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  siteData = null;
  post = null;
  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get("id");
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
      this.post = data.blog.items.find((p) => p.id === postId);
    });
  }
  static \u0275fac = function BlogDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["app-blog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "blog-detail container", 4, "ngIf"], [1, "blog-detail", "container"], [1, "blog-detail-header"], [1, "blog-detail-meta"], [1, "blog-category"], [1, "far", "fa-calendar"], [1, "far", "fa-clock"], [1, "far", "fa-user"], [1, "blog-detail-image"], [1, "blog-detail-content", 3, "innerHTML"], [1, "blog-detail-tags"], ["class", "blog-tag", 4, "ngFor", "ngForOf"], [1, "blog-detail-footer"], ["routerLink", "/blog", 1, "btn", "btn-outline"], [1, "blog-tag"]], template: function BlogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, BlogDetailComponent_article_0_Template, 23, 9, "article", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.post);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.blog-detail[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.blog-detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.blog-detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n.blog-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.blog-detail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  margin-bottom: 40px;\n}\n.blog-detail-content[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  font-size: 1.1rem;\n  color: var(--text-color);\n  margin-bottom: 30px;\n}\n.blog-detail-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  color: var(--primary-accent);\n}\n.blog-detail-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.blog-detail-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.blog-detail-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 40px;\n  border-top: 1px solid var(--border-color);\n}\n@media (max-width: 768px) {\n  .blog-detail[_ngcontent-%COMP%] {\n    padding: 100px 0 60px;\n  }\n  .blog-detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .blog-detail-image[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=blog-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent", filePath: "src\\app\\pages\\blog-detail\\blog-detail.component.ts", lineNumber: 14 });
})();
export {
  BlogDetailComponent
};
//# sourceMappingURL=chunk-WGRGPABC.js.map
