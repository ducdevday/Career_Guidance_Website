import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { DividerModule } from 'primeng/divider';
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { DetailTourOwnerComponent } from "./detail-tour-owner/detail-tour-owner.component";
@Component({
  selector: 'app-detail-tour',
  standalone: true,
  imports: [StandardBreadcrumbComponent, DividerModule, StandardButtonComponent, TabViewModule, CommonModule, DetailTourOwnerComponent],

  templateUrl: './detail-tour.component.html',
  styleUrl: './detail-tour.component.scss'
})
export class DetailTourComponent {
  title: string = 'Detail Tour'
  activeIndex: number = 1;
}
