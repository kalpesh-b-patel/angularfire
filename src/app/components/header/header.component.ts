import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppState } from '../../state';
import { Store } from '@ngrx/store';
import { logout } from '../../features/auth/state/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn } from '../../features/auth/state/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() user;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  navbarOpen = false;
  constructor(private authSerive: AuthService, private store: Store<AppState>) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.user = changes.user.currentValue;
    this.isLoggedIn$ = this.store.select(isLoggedIn);
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(): void {
    this.store.dispatch(logout());
    this.authSerive.logout();
  }

}
