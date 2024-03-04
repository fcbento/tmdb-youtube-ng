import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NotifierModule } from 'angular-notifier';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { MenuModule } from './menu/menu.module';
import { CoreInterceptor } from './core/interceptors/core.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptors/loeader.interceptor';
import { NgxsModule } from '@ngxs/store';
import { SessionState } from './core/auth/store/session.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { MovieState } from './movies/store/movies.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NotifierModule,
    SharedModule,
    MenuModule,
    NgxsModule.forRoot([
      SessionState,
      MovieState
    ]),
    NgxsStoragePluginModule.forRoot()
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: CoreInterceptor, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
