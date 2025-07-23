import { Component } from '@angular/core';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { StandardInputLabelComponent } from "../../../shared/components/standard-input-label/standard-input-label.component";
import { InputTextModule } from 'primeng/inputtext';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, InputTextModule, StandardButtonComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

}
