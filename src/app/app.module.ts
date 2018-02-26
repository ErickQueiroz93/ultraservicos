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
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { FinalizarPage } from '../pages/finalizar/finalizar';
import { CancelarPage } from '../pages/cancelar/cancelar';
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import {  HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { UsersProvider } from '../providers/users/users';

import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';
import { CancelarProvider } from '../providers/cancelar/cancelar';
import { FinalizarProvider } from '../providers/finalizar/finalizar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPipe,
    SortPipe,
    CanceladasPage,
    FinalizadasPage,
    LoginPage,
    CancelarPage,
    FinalizarPage,
    ParceirosPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CanceladasPage,
    FinalizadasPage,
    LoginPage,
    FinalizarPage,
    CancelarPage,
    ParceirosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwdServiceProvider,
    UsersProvider,
    CancelarProvider,
    FinalizarProvider
  ]
})
export class AppModule {}
