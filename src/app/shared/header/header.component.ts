import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public items: MenuItem[];

  public activeItem: MenuItem;

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home']},
      {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['profile']},
      {label: 'Cart', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['cart']}
    ];
  }
}
