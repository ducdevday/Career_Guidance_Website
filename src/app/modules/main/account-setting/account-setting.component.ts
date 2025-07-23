import { Component } from '@angular/core';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { StandardInputLabelComponent } from "../../../shared/components/standard-input-label/standard-input-label.component";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { GenderTypeData } from '../../../shared/enums/gender-type';
import { InputTextModule } from 'primeng/inputtext';
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";

@Component({
  selector: 'app-account-setting',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardButtonComponent],
  templateUrl: './account-setting.component.html',
  styleUrl: './account-setting.component.scss'
})
export class AccountSettingComponent {
  genderTypes = GenderTypeData

}
