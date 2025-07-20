import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../shared/layouts/main/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/layouts/main/header/header.component';
import { FooterComponent } from '../../../shared/layouts/main/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
