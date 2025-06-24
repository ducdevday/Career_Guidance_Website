import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToastModule,
    DialogModule,
    LottieComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Career Guidance System';
  loading$ = this.loadingService.loading$;
  animationOptions$ = this.loadingService.animationOptions$;
  
  constructor(
    private titleService: Title,
    private primengConfig: PrimeNGConfig,
    private loadingService: LoadingService
  ) {
    this.titleService.setTitle(this.title);
    this.primengConfig.ripple = true;
  }
}
