import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Images } from '../../../../../assets/data/images';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  private routerSubscription: Subscription = new Subscription();
  logoPath = Images.logoImage;

  HOME_ROUTE = 'HOME_ROUTE';
  MY_COURSE_ROUTE = 'MY_COURSE_ROUTE';
  HISTORY_PAYMENT_ROUTE = 'HISTORY_PAYMENT_ROUTE';
  ACCOUNT_ROUTE = 'ACCOUNT_ROUTE';
  CHANGE_PASSWORD_ROUTE = 'CHANGE_PASSWORD_ROUTE';

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(
    private readonly elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.subMenuToggleHandlerOnRouteChange();
    setTimeout(() => {
      this.subMenuToggleHandlerOnPageReload();
    }, 1);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  activeItem: string = '';
  setActive(item: string): void {
    this.activeItem = item;
  }

  subMenuToggleHandler = (event: MouseEvent): void => {
    const elem = event.target as HTMLElement;
    const subMenu = elem.closest('a.sub-menu') as Element;

    if (subMenu.getAttribute('aria-expanded') == 'false')
      subMenu.setAttribute('aria-expanded', 'true');
    else subMenu.setAttribute('aria-expanded', 'false');
  };

  subMenuToggleHandlerOnPageReload = (): void => {
    const elem = this.elementRef.nativeElement
      .querySelector('[aria-current="page"]')
      .closest('ul.sub-menu-item') as Element;

    const subMenu = elem?.previousSibling as Element;

    subMenu?.setAttribute('aria-expanded', 'true');
  };

  subMenuToggleHandlerOnRouteChange = (): void => {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const subMenu =
          this.elementRef.nativeElement.querySelectorAll('.sub-menu');
        const elem = this.elementRef.nativeElement.querySelector(
          `[href='${event.url}']`
        ) as Element;

        if (elem.closest('ul.sub-menu-item')) return;

        subMenu.forEach((subMenu: Element) => {
          if (subMenu.getAttribute('aria-expanded') == 'true')
            subMenu.setAttribute('aria-expanded', 'false');
        });
      }
    });
  };
}
