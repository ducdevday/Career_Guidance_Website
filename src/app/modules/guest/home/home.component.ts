import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { Route, Router } from '@angular/router';
import { LOGIN_ROUTE } from '../guest.routes';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StandardButtonComponent, CommonModule, RatingModule, DividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  landingItems = [
    {
      image: 'assets/images/landing-item1.png',
      title: 'Don\'t Know What Major to Choose?',
      description:
        'A website dedicated to 12th graders who are \“confused\” when choosing a major and school. There are course videos, detailed information about the industry and suggestions based on personal interests.',
    },
    {
      image: 'assets/images/landing-item2.png',
      title: 'Discover the right universities',
      description:
        "Our web app also helps you find the universities that best fit your academic and personal interests. By answering a few questions about your goals and preferences, we'll provide you with a list of universities that match your profile.",
    },
    {
      image: 'assets/images/landing-item3.png',
      title: 'Get Expert Guidance and Support',
      description:
        'Applying to universities can be a daunting process, but our web app is here to help. We provide expert guidance and support throughout the entire application process, from selecting the right universities to crafting a strong personal statement. Our team of experienced counsellors is dedicated to helping you succeed.',
    },
  ];
  constructor(private route: Router) {}

  navigateToLogin() {
    this.route.navigate([`/${LOGIN_ROUTE}`]);
  }
}
