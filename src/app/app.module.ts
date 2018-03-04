import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanceladasPage } from '../pages/canceladas/canceladas';
import { FinalizadasPage } from '../pages/finalizadas/finalizadas';
import { PagasPage } from '../pages/pagas/pagas';
import { ComissionadosPage } from '../pages/comissionados/comissionados';
import { LoginPage } from '../pages/login/login';
import { PagarPage } from '../pages/pagar/pagar';
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { FinalizarPage } from '../pages/finalizar/finalizar';
import { CancelarPage } from '../pages/cancelar/cancelar';
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import { HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { UsersProvider } from '../providers/users/users';

import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';
import { CancelarProvider } from '../providers/cancelar/cancelar';
import { FinalizarProvider } from '../providers/finalizar/finalizar';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { PagarProvider } from '../providers/pagar/pagar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPipe,
    SortPipe,
    CanceladasPage,
    FinalizadasPage,
    PagasPage,
    ComissionadosPage,
    LoginPage,
    CancelarPage,
    FinalizarPage,
    ParceirosPage,
    PagarPage
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
    PagasPage,
    ComissionadosPage,
    LoginPage,
    FinalizarPage,
    CancelarPage,
    ParceirosPage,
    PagarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwdServiceProvider,
    UsersProvider,
    CancelarProvider,
    FinalizarProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    PagarProvider
  ]
})
export class AppModule {}
