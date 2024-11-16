import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'localstorage-polyfill';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
// global['localStorage'] = localStorage;
