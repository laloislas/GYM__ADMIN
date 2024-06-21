import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { environment } from '../gym-admin/src/environments/environment';
import { enableProdMode } from '@angular/core';
defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Call the element loader before the bootstrapModule/bootstrapApplication call
