import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { UserModel } from '../../models/user.model';
import * as actions from '../../features/auth/state/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private afAuth: AngularFireAuth, private router: Router, private store: Store<AppState>) {
    this.afAuth.authState.subscribe((currentUser: User) => {
      if (currentUser !== null) {
        const user: UserModel = {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email
        };
        this.user = currentUser;
        store.dispatch(actions.login({user}));
        this.router.navigateByUrl('/home').then();
      } else {
        this.router.navigateByUrl('/auth/signin').then();
      }
    });
  }

  ngOnInit(): void {
  }
}
