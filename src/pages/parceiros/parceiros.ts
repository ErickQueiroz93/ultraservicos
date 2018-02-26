import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-parceiros',
  templateUrl: 'parceiros.html',
})
export class ParceirosPage {

  public obj: any;
  public result: any;
  public id_parceiro: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider, public menuCtrl: MenuController, private storage: Storage) {
    this.getAllParceiros();
  }

  getAllParceiros() {

    this.storage.get('id_parceiro')
    .then((val) => {
      this.id_parceiro = val;
    })
    .then( (res) => {
      this.twdService.loadParceiros( this.id_parceiro )
      .then(data => {
        console.log(data);
        this.obj = data;
        this.result = this.obj._embedded.episodes;
        console.log(data);
      });
    })
    
  }

  getDetailOrdensParceiro(id:number){
    this.navCtrl.push("ParceiroordensPage", {id: id})
    console.log("episodio"+id)
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParceirosPage');
  }

}
