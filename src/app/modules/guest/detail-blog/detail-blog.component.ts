import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";

@Component({
  selector: 'app-detail-blog',
  standalone: true,
  imports: [StandardBreadcrumbComponent],
  templateUrl: './detail-blog.component.html',
  styleUrl: './detail-blog.component.scss'
})
export class DetailBlogComponent {
  title: string = 'Detail Blog'

}
