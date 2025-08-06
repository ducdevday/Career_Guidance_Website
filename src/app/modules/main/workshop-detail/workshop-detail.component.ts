import { Component } from '@angular/core';
import { StandardTitleComponent } from '../../../shared/components/standard-title/standard-title.component';
import { StandardCardComponent } from '../../../shared/components/standard-card/standard-card.component';
import { StandardInputLabelComponent } from '../../../shared/components/standard-input-label/standard-input-label.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ActionButton, StandardOptionsComponent } from '../../../shared/components/standard-options/standard-options.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { IndustryData } from '../../../shared/models/industry';
import { CommonModule } from '@angular/common';
import { TabViewModule } from "primeng/tabview";

@Component({
  selector: 'app-workshop-detail',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardOptionsComponent, InputSwitchModule, EditorModule, CommonModule, TabViewModule],
  templateUrl: './workshop-detail.component.html',
  styleUrl: './workshop-detail.component.scss'
})
export class WorkshopDetailComponent {
  activeIndex: number = 1;
  industries = IndustryData
  buttons: ActionButton[] = [
    {
      icon: 'pi-check-circle',
      label: 'Approve',
      action: 'approve'
    },
    {
      icon: 'pi-times-circle',
      label: 'Reject',
      action: 'reject'
    }
  ]
  thumbnail: string | null = null;

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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.thumbnail = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
