import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <nav>
          <a routerLink="/component1" routerLinkActive="active">Component 1</a>
          <a routerLink="/component2" routerLinkActive="active">Component 2</a>
          <a routerLink="/djcomponent" routerLinkActive="active">Django Component</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
