import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinalizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b

@IonicPage()
@Component({
  selector: 'page-finalizadas',
  templateUrl: 'finalizadas.html',
})
export class FinalizadasPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizadasPage');
=======
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider, public menuCtrl: MenuController) {
    this.getAllFinalizadas();
  }

  getAllFinalizadas() {
    this.twdService.loadFinalizadas()
      .then(data => {
        this.obj = data;
        this.result = this.obj._embedded.episodes;
      });
  }

  getDetail(id:number){
    this.navCtrl.push("DetailsPage", {id: id})
    console.log("episodio"+id)
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
  }

}
