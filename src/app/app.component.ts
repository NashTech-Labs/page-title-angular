import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a routerLink="/home">Home</a></h2>
      </li>
      <li>
        <h2><a routerLink="/about">About</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-router-page-titles';
}
