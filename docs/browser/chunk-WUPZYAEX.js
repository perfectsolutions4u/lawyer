import {
  HttpClient
} from "./chunk-MD53K23M.js";
import {
  catchError,
  map,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OWUOXPQW.js";

// src/app/services/data.service.ts
var DataService = class _DataService {
  http;
  dataUrl = "assets/data/data.json";
  cachedData = null;
  constructor(http) {
    this.http = http;
  }
  getSiteData() {
    if (this.cachedData) {
      return of(this.cachedData);
    }
    return this.http.get(this.dataUrl).pipe(map((data) => {
      this.cachedData = data;
      return data;
    }), catchError((error) => {
      console.error("Error loading site data:", error);
      throw error;
    }));
  }
  clearCache() {
    this.cachedData = null;
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};

export {
  DataService
};
//# sourceMappingURL=chunk-WUPZYAEX.js.map
