import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      })
    ),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule, NgbModule),
  ],
}).catch((err) => console.error(err));
