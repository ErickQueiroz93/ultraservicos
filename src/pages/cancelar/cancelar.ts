import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CancelarProvider } from '../../providers/cancelar/cancelar';

@IonicPage()
@Component({
  selector: 'page-cancelar',
  templateUrl: 'cancelar.html',
})
export class CancelarPage {
  model: CancelarOS;
  public id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private cancelarProvider: CancelarProvider) {
    this.model = new CancelarOS();
    this.model.descricao = '';
    this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelarPage');
  }

  cancelarOS(){

    this.cancelarProvider.canOS(this.model.descricao, this.id)
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