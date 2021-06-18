import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div class='container1'>
    <nav class='navbar navbar-expand navbar-light  shift' text->
    <a class='navbar-brand'></a>
        <ul class='nav'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/medicine'>Medicine</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/clothes'>Clothes</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/ewaste'>E-Waste</a></li>
        </ul>
    </nav>
    </div>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'DR3AMS';
  //<a class='navbar-brand'>{{pageTitle}}</a>
}
