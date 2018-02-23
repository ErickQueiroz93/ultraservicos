import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { FinalizarProvider } from '../../providers/finalizar/finalizar';


@IonicPage()
@Component({
  selector: 'page-finalizar',
  templateUrl: 'finalizar.html',
})
export class FinalizarPage {
  model: FinalizarOS;
  id_parceiro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private finalizarProvider: FinalizarProvider, private storage: Storage) {
    this.model = new FinalizarOS();
    this.model.valor = '';
    this.model.descricao = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarPage');
  }

  finalizarOS(){

    this.storage.get('id_parceiro').then((val) => {
      this.id_parceiro = val;
    });

    this.finalizarProvider.finOS(this.model.valor, this.model.descricao, this.id_parceiro)
      .then((result: any) => {
        this.toast.create({ message: 'OS finalizado com sucesso!.', position: 'botton', duration: 5000 }).present();
        console.log(result);

        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao finalizar OS.', position: 'botton', duration: 5000 }).present();
      });
  }

}

export class FinalizarOS {
  valor: string;
  descricao: string;
}