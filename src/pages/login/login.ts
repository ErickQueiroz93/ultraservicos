import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider, private storage: Storage) {
    this.model = new User();
    this.model.usuario = '';
    this.model.senha = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  acessar() {
    this.userProvider.acessar(this.model.usuario, this.model.senha)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 5000 }).present();
        console.log(result);

        this.storage.set('id_parceiro', result.id_parceiro);

        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login.', position: 'botton', duration: 5000 }).present();
      });
  }

}

export class User {
  usuario: string;
  senha: string;
}