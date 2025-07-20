import { Component } from '@angular/core';
import { StandardTitleComponent } from '../../../shared/components/standard-title/standard-title.component';
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, CalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
