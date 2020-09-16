import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CounterModule } from './counter/counter.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResetComponent } from './auth/components/reset/reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/response.interceptor';
import { ToastComponent } from './components/toast/toast.component';
import { reducers } from './state';

export const firebaseConfig = {
  apiKey: 'AIzaSyBT8Ws447uBBhfqU5kxVnxOqqN_Bdj-Qm0',
  authDomain: 'kp-firebase-authentication.firebaseapp.com',
  databaseURL: 'https://kp-firebase-authentication.firebaseio.com',
  projectId: 'kp-firebase-authentication',
  storageBucket: 'kp-firebase-authentication.appspot.com',
  messagingSenderId: '22180440909',
  appId: '1:22180440909:web:ed40ec56e40e7ad09aa504'
};

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResetComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CounterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    NgbModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
