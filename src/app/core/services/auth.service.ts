import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { SocialMedia } from '../enums/auth.enum';
import { User } from 'firebase/auth';
import { NotifierService } from 'angular-notifier';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private fireStore = inject(AngularFirestore);
  private fireAuth = inject(AngularFireAuth);
  private router = inject(Router);
  private notifier = inject(NotifierService);
  private loader = inject(LoaderService);
  public token = '';

  public async signupUser(email: string, password: string): Promise<boolean> {
    this.loader.open('creating user');
    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      this.setUserData(result.user);
      return true;
    } catch (error: any) {
      this.loader.close();
      this.notifier.notify('error', error?.message);
      return false;
    }
  }

  public async signinUser(email: string, password: string): Promise<void> {
    this.loader.open('loggin in');
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(email, password);
      this.setUserData(result.user);
      this.subscribeToAuthState();
    } catch (error: any) {
      this.loader.close();
      this.notifier.notify('error', error?.message);
    }
  }

  private subscribeToAuthState(): void {
    this.fireAuth.authState.subscribe((user: User) => {
      if (user) this.router.navigate(['menu/movies']);
    });
  }

  public async socialMediaAuth(media: string): Promise<void> {

    const provider = {
      [SocialMedia.GOOGLE]: new auth.GoogleAuthProvider(),
      [SocialMedia.FACEBOOK]: new auth.FacebookAuthProvider(),
      [SocialMedia.GITHUB]: new auth.GithubAuthProvider(),
      [SocialMedia.TWITTER]: new auth.TwitterAuthProvider(),
    }[media];

    return this.getProvider(provider);
  }

  private async getProvider(provider: any): Promise<void> {
    this.loader.open('loggin in');
    try {
      const result = await this.fireAuth.signInWithPopup(provider);
      if(result) {
        this.setUserData(result.user);
        this.subscribeToAuthState();
      }
    } catch (error: any) {
      this.loader.close();
      this.notifier.notify('error', error.message);
    }
  }

  private setUserData(user: any) {
    const userRef = this.fireStore.doc(`users/${user.uid}`);
    const { uid, email, displayName, photoURL, emailVerified } = user;
    const userData = { uid, email, displayName, photoURL, emailVerified };
    this.loader.close();
    return userRef.set(userData, { merge: true });
  }

  public getToken() {

  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  public logout(): void {
    this.token = null;
    this.loader.open();
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['/'])
      setTimeout(() => { this.loader.close(); }, 1000);
    })
  }
}