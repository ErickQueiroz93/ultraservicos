import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CanceladasPage } from '../pages/canceladas/canceladas';
import { FinalizadasPage } from '../pages/finalizadas/finalizadas';
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { PagasPage } from '../pages/pagas/pagas';
import { ComissionadosPage } from '../pages/comissionados/comissionados';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  rootPage:any = LoginPage;
  public id_parceiro : any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.buscaIdParceiro();
  }

  buscaIdParceiro(){
    this.storage.get('id_parceiro')
    .then((val) => {
      this.id_parceiro = val;
      console.log("erick yt",val)
      console.log("erick yt",this.id_parceiro)
    })
  }

  openCanceladas(){
    this.nav.push(CanceladasPage);
  }
  openFinalizadas(){
    this.nav.push(FinalizadasPage);
  }
  openFinalizadasWeb(){
    //this.nav.push(FinalizadasPage);
    window.open('http://ultraconsultas.com.br/apiUltraServicos/pagarMultiplasOrdens.php?id_parceiro='+this.id_parceiro, '_system', 'location=yes'); 
    return false;
  }
  openEmAberto(){
    this.nav.push(HomePage);
  }
  openParceiros(){
    this.nav.push(ParceirosPage);
  }

  openPagas(){
    this.nav.push(PagasPage);
  }

  openComissionadas(){
    this.nav.push(ComissionadosPage);
  }
  
}

