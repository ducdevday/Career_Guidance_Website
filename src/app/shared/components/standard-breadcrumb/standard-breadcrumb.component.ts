import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {  BreadcrumbModule } from 'primeng/breadcrumb';
@Component({
  selector: 'app-standard-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './standard-breadcrumb.component.html',
  styleUrl: './standard-breadcrumb.component.scss'
})
export class StandardBreadcrumbComponent {
  @Input() currentRoute! : string;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: this.currentRoute },
      ];
      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
