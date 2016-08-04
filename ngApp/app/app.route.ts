import { provideRouter, RouterConfig } from '@angular/router';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

const routes: RouterConfig = [
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
];

export const appRouterProviders = [
  provideRouter(routes)
];