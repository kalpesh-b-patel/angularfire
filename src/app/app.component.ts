import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { UserModel } from './models/user.model';
import * as actions from './auth/state/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private afAuth: AngularFireAuth, private router: Router, private store: Store) {
    this.afAuth.authState.subscribe((currentUser: User) => {
      if (currentUser !== null) {
        const user: UserModel = {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email
        };
        this.user = currentUser;
        store.dispatch(actions.login({user}));
        currentUser ?
          this.router.navigateByUrl('/home').then() :
          this.router.navigateByUrl('/signin').then();
      }
    });
  }

  ngOnInit(): void {
  }
}
