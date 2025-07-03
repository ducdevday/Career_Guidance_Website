import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../components/standard-button/standard-button.component';
import { Router } from '@angular/router';
import {
  LOGIN_ROUTE,
  SIGN_UP_ROUTE,
} from '../../../../modules/guest/guest.routes';
import { Images } from '../../../../../assets/data/images';
import { MenuItem } from 'primeng/api';
import { AppState } from '../../../../stores/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../../services/auth.service';
import { UserInfo } from '../../../models/user-info';
import { Observable } from 'rxjs';
import { clearUserInfoAction, getUserInfoAction } from '../../../../stores/getUserInfo/getUserInfo.action';
import { selectUserData } from '../../../../stores/getUserInfo/getUserInfo.selector';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StandardButtonComponent, CommonModule,MenuModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navigateToLogIn() {
    this.router.navigate([`/${LOGIN_ROUTE}`]);
  }

  navigateToSignUpForGuardian() {
    this.router.navigate([`/${SIGN_UP_ROUTE}`]);
  }

  userDefaultPath = Images.avatarDefaultImage;
  user$: Observable<UserInfo | null> = this.store.select(selectUserData);
  searchQuery: string = '';
  userMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { separator: true },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        this.onLogOutClicked();
      },
    },
  ];
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getUserInfoAction());
  }

  onLogOutClicked() {
    this.store.dispatch(clearUserInfoAction());
  }
}
