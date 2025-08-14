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
  selector: 'app-lesson-detail',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, StandardInputLabelComponent, DropdownModule, CalendarModule, InputTextModule, StandardOptionsComponent, InputSwitchModule, EditorModule, CommonModule, TabViewModule, TableModule],
  templateUrl: './lesson-detail.component.html',
  styleUrl: './lesson-detail.component.scss'
})
export class LessonDetailComponent {
  activeIndex: number = 1;
  industries = IndustryData
  buttons: ActionButton[] = [
    {
      icon: 'pi-plus',
      label: 'Add Video',
      action: 'add-video'
    },
    {
      icon: 'pi-plus',
      label: 'Add Resource',
      action: 'add-resource'
    },
  ]
  thumbnail: string | null = null;
  videos = [
    { id: 1, name: 'lesson-main.mp4', duration: '15:30', capacity: '120 MB' },
  ];
  resources = [
    { id: 1, name: 'lesson-intro.mp4', duration: '15:30', capacity: '120 MB' },
    { id: 2, name: 'chapter1-slides.pdf', duration: '', capacity: '3.2 MB' },
    { id: 3, name: 'exercise1.docx', duration: '', capacity: '1.1 MB' },
    { id: 4, name: 'tutorial-audio.mp3', duration: '05:45', capacity: '8.5 MB' },
    { id: 5, name: 'dataset.zip', duration: '', capacity: '250 MB' }
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
