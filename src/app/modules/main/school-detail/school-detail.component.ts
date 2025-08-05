import { Component } from '@angular/core';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { StandardInputLabelComponent } from "../../../shared/components/standard-input-label/standard-input-label.component";
import { StandardOptionsComponent } from "../../../shared/components/standard-options/standard-options.component";
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { IndustryData } from '../../../shared/models/industry';
import { MultiSelectModule } from 'primeng/multiselect';
@Component({
  selector: 'app-school-detail',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardOptionsComponent, InputSwitchModule, MultiSelectModule],
  templateUrl: './school-detail.component.html',
  styleUrl: './school-detail.component.scss'
})
export class SchoolDetailComponent {
  industries = IndustryData
  onActionClick(action: string) {
    switch (action) {
      case 'save':
        console.log('Save clicked');
        break;
      case 'close':
        console.log('Close clicked');
        break;
    }
  }
}
