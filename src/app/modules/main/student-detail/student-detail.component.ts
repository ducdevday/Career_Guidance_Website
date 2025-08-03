import { Component } from '@angular/core';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { StandardInputLabelComponent } from "../../../shared/components/standard-input-label/standard-input-label.component";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { InputSwitchModule } from 'primeng/inputswitch';
import { GenderTypeData } from '../../../shared/enums/gender-type';
import { InputTextModule } from 'primeng/inputtext';
import { StandardOptionsComponent } from "../../../shared/components/standard-options/standard-options.component";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardOptionsComponent, InputSwitchModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  genderTypes = GenderTypeData
  buttons = [
    { icon: 'pi-save', label: 'Save', action: 'save' },
    { icon: 'pi-times', label: 'Close', action: 'close' }
  ];
  
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
