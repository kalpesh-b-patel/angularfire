import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  currentUser(): Observable<User | null> {
    return this.afAuth.user;
  }

  async createUser(email: string, password: string, displayName: string): Promise<User> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);

      return await this.updateUserProfile({
        displayName
      });
    } catch (err) {
      console.log(err.code);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const credentials = await this.afAuth.signInWithEmailAndPassword(email, password);
      return credentials.user;
    } catch (err) {
      console.log(err.code);
    }
  }

  async reset(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      return;
    } catch (err) {
      console.log(err.toString());
    }
  }

  async updateUserProfile(profile): Promise<User> {
    const user = await this.afAuth.currentUser;
    await user.updateProfile(profile);
    return user;
  }

  logout(): void {
    this.afAuth.signOut().then();
  }
}
