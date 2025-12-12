import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BXZ2EO3C.js";
import {
  DataService
} from "./chunk-WUPZYAEX.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OWUOXPQW.js";

// src/app/pages/contact/contact.component.ts
function ContactComponent_div_1_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.siteData.contact.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.siteData.contact.subtitle);
  }
}
function ContactComponent_section_2_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_section_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ContactComponent_section_2_div_7_span_1_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors["required"]);
  }
}
function ContactComponent_section_2_div_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_section_2_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_section_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ContactComponent_section_2_div_12_span_1_Template, 2, 0, "span", 21)(2, ContactComponent_section_2_div_12_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function ContactComponent_section_2_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0627\u0644\u0645\u0648\u0636\u0648\u0639 \u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_section_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ContactComponent_section_2_div_17_span_1_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subject == null ? null : ctx_r0.subject.errors == null ? null : ctx_r0.subject.errors["required"]);
  }
}
function ContactComponent_section_2_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_section_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ContactComponent_section_2_div_22_span_1_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.message == null ? null : ctx_r0.message.errors == null ? null : ctx_r0.message.errors["required"]);
  }
}
function ContactComponent_section_2_div_26_div_1_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function ContactComponent_section_2_div_26_div_1_a_7_Template_a_click_0_listener() {
      const content_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openGoogleMaps(content_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", content_r4, " ");
  }
}
function ContactComponent_section_2_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 28)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ContactComponent_section_2_div_26_div_1_a_7_Template, 2, 1, "a", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(info_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", info_r5.content);
  }
}
function ContactComponent_section_2_div_26_div_2_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r6 = ctx.$implicit;
    \u0275\u0275property("href", "tel:" + content_r6, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", content_r6, " ");
  }
}
function ContactComponent_section_2_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 28)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ContactComponent_section_2_div_26_div_2_a_7_Template, 2, 2, "a", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(info_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", info_r5.content);
  }
}
function ContactComponent_section_2_div_26_div_3_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r7 = ctx.$implicit;
    \u0275\u0275property("href", "mailto:" + content_r7, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", content_r7, " ");
  }
}
function ContactComponent_section_2_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 28)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ContactComponent_section_2_div_26_div_3_a_7_Template, 2, 2, "a", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(info_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", info_r5.content);
  }
}
function ContactComponent_section_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, ContactComponent_section_2_div_26_div_1_Template, 8, 2, "div", 23)(2, ContactComponent_section_2_div_26_div_2_Template, 8, 2, "div", 23)(3, ContactComponent_section_2_div_26_div_3_Template, 8, 2, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", info_r5.icon === "location");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", info_r5.icon === "phone");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", info_r5.icon === "email");
  }
}
function ContactComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5)(2, "form", 6);
    \u0275\u0275listener("ngSubmit", function ContactComponent_section_2_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(3, "div", 7)(4, "label", 8);
    \u0275\u0275text(5, "\u0627\u0644\u0627\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 9);
    \u0275\u0275template(7, ContactComponent_section_2_div_7_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "label", 11);
    \u0275\u0275text(10, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, ContactComponent_section_2_div_12_Template, 3, 2, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "label", 13);
    \u0275\u0275text(15, "\u0627\u0644\u0645\u0648\u0636\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 14);
    \u0275\u0275template(17, ContactComponent_section_2_div_17_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7)(19, "label", 15);
    \u0275\u0275text(20, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 16);
    \u0275\u0275template(22, ContactComponent_section_2_div_22_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275text(24, " \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275template(26, ContactComponent_section_2_div_26_Template, 4, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.contactForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.name == null ? null : ctx_r0.name.invalid) && (ctx_r0.name == null ? null : ctx_r0.name.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && (ctx_r0.email == null ? null : ctx_r0.email.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.subject == null ? null : ctx_r0.subject.invalid) && (ctx_r0.subject == null ? null : ctx_r0.subject.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.message == null ? null : ctx_r0.message.invalid) && (ctx_r0.message == null ? null : ctx_r0.message.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.contactForm.invalid);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.siteData.contact.info);
  }
}
var ContactComponent = class _ContactComponent {
  dataService = inject(DataService);
  siteData = null;
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });
  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form submitted:", this.contactForm.value);
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
  // Getter methods for easy access to form controls
  get name() {
    return this.contactForm.get("name");
  }
  get email() {
    return this.contactForm.get("email");
  }
  get subject() {
    return this.contactForm.get("subject");
  }
  get message() {
    return this.contactForm.get("message");
  }
  /**
   * Open Google Maps in new tab with the address
   */
  openGoogleMaps(address) {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "page-header"], ["class", "container", 4, "ngIf"], ["class", "contact-section container", 4, "ngIf"], [1, "container"], [1, "contact-section", "container"], [1, "contact-form"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "formControlName", "name"], ["class", "error-message", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "formControlName", "email"], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", "formControlName", "subject"], ["for", "message"], ["id", "message", "name", "message", "formControlName", "message"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "contact-info"], ["class", "contact-card", 4, "ngFor", "ngForOf"], [1, "error-message"], [4, "ngIf"], [1, "contact-card"], ["class", "contact-link", 4, "ngIf"], [1, "contact-link"], [1, "contact-icon-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "contact-icon"], ["d", "M12 0C7.589 0 4 3.589 4 8c0 6.896 8 16 8 16s8-9.104 8-16c0-4.411-3.589-8-8-8zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"], [1, "contact-content"], ["class", "contact-value", "title", "\u0627\u0641\u062A\u062D \u0641\u064A Google Maps", 3, "click", 4, "ngFor", "ngForOf"], ["title", "\u0627\u0641\u062A\u062D \u0641\u064A Google Maps", 1, "contact-value", 3, "click"], ["d", "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"], ["class", "contact-value", 3, "href", 4, "ngFor", "ngForOf"], [1, "contact-value", 3, "href"], ["d", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, ContactComponent_div_1_Template, 5, 2, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, ContactComponent_section_2_Template, 27, 7, "section", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.siteData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  padding: 120px 0 60px;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./media/banner.webp");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 60vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contact-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.contact-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto 60px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.contact-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 25px;\n  border-radius: 15px;\n  border: 1px solid var(--border-color);\n  text-align: center;\n  transition: var(--transition-base);\n}\n.contact-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n  transition: var(--transition-base);\n}\n.contact-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.contact-icon-wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  margin-bottom: 20px;\n  transition: var(--transition-base);\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #fff;\n  transition: var(--transition-base);\n}\n.contact-link[_ngcontent-%COMP%]:hover   .contact-icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  box-shadow: 0 5px 15px rgba(155, 111, 69, 0.4);\n}\n.contact-link[_ngcontent-%COMP%]:hover   .contact-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.contact-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: var(--text-color);\n  font-size: 1.2rem;\n}\n.contact-value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  line-height: 1.8;\n  margin: 5px 0;\n  text-decoration: none;\n  transition: var(--transition-base);\n}\n.contact-value[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.contact-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary-accent);\n  margin-bottom: 15px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.875rem;\n  margin-top: 5px;\n  display: block;\n}\n.form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.form-group[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #27ae60;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .contact-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\pages\\contact\\contact.component.ts", lineNumber: 19 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-6JKSLECX.js.map
