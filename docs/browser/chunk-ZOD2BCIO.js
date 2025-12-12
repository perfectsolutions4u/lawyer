import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-BXZ2EO3C.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-REX7WYYV.js";
import "./chunk-MD53K23M.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OWUOXPQW.js";

// src/app/pages/signup/signup.component.ts
var SignupComponent = class _SignupComponent {
  static \u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 0, consts: [[1, "auth-section"], [1, "auth-container"], [1, "form-group"], ["type", "text", "required", ""], ["type", "email", "required", ""], ["type", "password", "required", ""], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form")(5, "div", 2)(6, "label");
      \u0275\u0275text(7, "\u0627\u0644\u0627\u0633\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2)(10, "label");
      \u0275\u0275text(11, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 2)(14, "label");
      \u0275\u0275text(15, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275text(18, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F ");
      \u0275\u0275elementStart(21, "a", 7);
      \u0275\u0275text(22, "\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterModule, RouterLink], styles: ["\n\n.auth-section[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 15px;\n  border: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src\\app\\pages\\signup\\signup.component.ts", lineNumber: 13 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=chunk-ZOD2BCIO.js.map
