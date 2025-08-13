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
import { TableModule } from "primeng/table";
@Component({
  selector: 'app-chapter-detail',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardOptionsComponent, InputSwitchModule, EditorModule, CommonModule, TabViewModule, TableModule],
  templateUrl: './chapter-detail.component.html',
  styleUrl: './chapter-detail.component.scss'
})
export class ChapterDetailComponent {
  activeIndex: number = 1;
  industries = IndustryData
  buttons: ActionButton[] = [
    {
      icon: 'pi-plus',
      label: 'Add Lesson',
      action: 'add-lesson'
    },
  ]
  thumbnail: string | null = null;
  lessons = [
    { id: 1, name: 'Introduction to Angular', numericalOrder: 1, createdDate: '2025-08-01' },
    { id: 2, name: 'Components & Templates', numericalOrder: 2, createdDate: '2025-08-02' },
    { id: 3, name: 'Data Binding & Events', numericalOrder: 3, createdDate: '2025-08-03' },
    { id: 4, name: 'Directives & Pipes', numericalOrder: 4, createdDate: '2025-08-04' },
    { id: 5, name: 'Services & Dependency Injection', numericalOrder: 5, createdDate: '2025-08-05' }
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
