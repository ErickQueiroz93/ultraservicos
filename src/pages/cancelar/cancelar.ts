import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { CancelarProvider } from '../../providers/cancelar/cancelar';

@IonicPage()
@Component({
  selector: 'page-cancelar',
  templateUrl: 'cancelar.html',
})
export class CancelarPage {
  model: CancelarOS;
  id_parceiro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private cancelarProvider: CancelarProvider, private storage: Storage) {
    this.model = new CancelarOS();
    this.model.descricao = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelarPage');
  }

  cancelarOS(){

    this.storage.get('id_parceiro').then((val) => {
      this.id_parceiro = val;
    });

    this.cancelarProvider.canOS(this.model.descricao, this.id_parceiro)
      .then((result: any) => {
        this.toast.create({ message: 'OS cancelada com sucesso!.', position: 'botton', duration: 5000 }).present();
        console.log(result);

        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao cancelar OS.', position: 'botton', duration: 5000 }).present();
      });
  }

}

export class CancelarOS {
  descricao: string;
}