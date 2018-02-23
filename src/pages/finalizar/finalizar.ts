import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FinalizarProvider } from '../../providers/finalizar/finalizar';


@IonicPage()
@Component({
  selector: 'page-finalizar',
  templateUrl: 'finalizar.html',
})
export class FinalizarPage {
  model: FinalizarOS;
  public id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private finalizarProvider: FinalizarProvider) {
    this.model = new FinalizarOS();
    this.model.valor = '';
    this.model.descricao = '';
    this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarPage');
  }

  finalizarOS(){

    this.finalizarProvider.finOS(this.model.valor, this.model.descricao, this.id)
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