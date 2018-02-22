import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
=======
import { NavController, MenuController } from 'ionic-angular';
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

<<<<<<< HEAD
  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider) {
=======
  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider, public menuCtrl: MenuController) {
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
    this.getAll();
  }

  getAll() {
    this.twdService.load()
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
