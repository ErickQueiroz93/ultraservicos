import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanceladasPage } from '../pages/canceladas/canceladas';
import { FinalizadasPage } from '../pages/finalizadas/finalizadas';
import { LoginPage } from '../pages/login/login';
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import {  HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { UsersProvider } from '../providers/users/users';

import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPipe,
    SortPipe,
    CanceladasPage,
    FinalizadasPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
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
    TwdServiceProvider,
    UsersProvider
  ]
})
export class AppModule {}
