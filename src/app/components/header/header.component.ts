import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() user;
  navbarOpen = false;
  constructor(private authSerive: AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.user = changes.user.currentValue;
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(): void {
    this.authSerive.logout();
  }

}
