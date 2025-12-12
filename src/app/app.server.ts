import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    AppComponent,
    ServerModule
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
