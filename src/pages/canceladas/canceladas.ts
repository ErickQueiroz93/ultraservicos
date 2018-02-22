import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';

@IonicPage()
@Component({
  selector: 'page-canceladas',
  templateUrl: 'canceladas.html',
})
export class CanceladasPage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider, public menuCtrl: MenuController) {
    this.getAllCanceladas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanceladasPage');
  }

  getAllCanceladas() {
    this.twdService.loadCanceladas()
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
  }

}
