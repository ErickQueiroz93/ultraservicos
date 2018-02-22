import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
=======
import { CanceladasPage } from '../pages/canceladas/canceladas';
import { FinalizadasPage } from '../pages/finalizadas/finalizadas';
import { LoginPage } from '../pages/login/login';
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import {  HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
<<<<<<< HEAD
=======
import { UsersProvider } from '../providers/users/users';
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPipe,
<<<<<<< HEAD
    SortPipe
=======
    SortPipe,
    CanceladasPage,
    FinalizadasPage,
    LoginPage
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CanceladasPage,
    FinalizadasPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    TwdServiceProvider
=======
    TwdServiceProvider,
    UsersProvider
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
  ]
})
export class AppModule {}
