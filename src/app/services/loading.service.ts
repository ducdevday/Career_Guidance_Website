import { Injectable } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  lottieOptions: AnimationOptions = {
    path: '/assets/animations/processing.json',
    loop: true,
    autoplay: true,
  };

  private animationOptionsSubject = new BehaviorSubject<AnimationOptions>(
    this.lottieOptions
  );
  animationOptions$: Observable<AnimationOptions> =
    this.animationOptionsSubject.asObservable();

  show(options: AnimationOptions = this.lottieOptions): void {
    this.animationOptionsSubject.next(options);
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingSubject.next(false);
  }
}
