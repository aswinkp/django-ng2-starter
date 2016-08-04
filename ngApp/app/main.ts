import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {appRouterProviders} from "./app.route";
import {HTTP_PROVIDERS} from "@angular/http";
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS
])
.catch(err => console.error(err));