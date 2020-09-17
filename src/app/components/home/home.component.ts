import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDisplayName } from '../../features/auth/state/auth.reducer';
import { AppState } from '../../state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<any>;
  constructor(private authService: AuthService, private http: HttpClient, private store: Store<AppState>) {
    // this.authService.currentUser().subscribe(user => {
    //   this.user = user;
    //   this.loading = false;
    // });
  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectDisplayName);
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log(data));
  }

}
