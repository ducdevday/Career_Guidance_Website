import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { DetailCourseLessonComponent } from './detail-course-lesson/detail-course-lesson.component';
import { Button } from "primeng/button";
@Component({
  selector: 'app-detail-course',
  standalone: true,
  imports: [
    StandardButtonComponent,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    TabViewModule,
    ProgressBarModule,
    DetailCourseLessonComponent,
    CommonModule,
],
  templateUrl: './detail-course.component.html',
  styleUrl: './detail-course.component.scss',
})
export class DetailCourseComponent {
  activeIndex: number = 2;
  sections = [
    {
      title: 'Getting Started',
      lectureCount: 202,
      duration: '19h 37m',
      lessons: [
        { title: 'Sign up in Webflow', duration: '07:31', isWatching: true },
        { title: 'Setup your workspace', duration: '04:20' },
      ],
    },
    {
      title: 'Advanced Features',
      lectureCount: 150,
      duration: '12h 10m',
      lessons: [
        { title: 'Using CMS', duration: '06:45', isFinish: false },
        { title: 'Animation basics', duration: '08:12', isFinish: false },
      ],
    },
  ];
  comments = [
    {
      user: 'Ronald Richards',
      time: '1 week ago',
      avatar: 'https://i.pravatar.cc/40?img=5',
      content: 'Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.',
      replies: [
        {
          user: 'Kristin Watson',
          isAuthor: true,
          time: '1 week ago',
          avatar: 'https://i.pravatar.cc/40?img=47',
          content:
            'Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus augue quis dictum egestas.',
        },
        {
          user: 'Cody Fisher',
          time: '1 week ago',
          avatar: 'https://i.pravatar.cc/40?img=59',
          content: 'Thank You so much sir, you’re a great mentor. 🔥🔥🔥',
        },
      ],
    },
  ];
  onPreviousLectureClicked() {}

  onNextLectureClicked() {}
}
