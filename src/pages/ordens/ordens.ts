import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ordens',
  templateUrl: 'ordens.html',
})
export class OrdensPage {

  public obj: any;
  public result: any;
  public id_parceiro: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  public id: any;

  constructor(public navCtrl: NavController,public twdService: TwdServiceProvider, public menuCtrl: MenuController, private storage: Storage, public navParams: NavParams) {
    this.getAllTodas();
    this.id = navParams.get("id");
  }

  getAllTodas() {
    this.storage.get('id_parceiro')
    .then((val) => {
      this.id_parceiro = val;
    })
    .then( (res) => {
      this.twdService.loadTodas( this.id )
      .then(data => {
        console.log(data);
        this.obj = data;
        this.result = this.obj._embedded.episodes;
        console.log(data);
      });
    })
  }

  getDetailNovo(id:number){
    this.navCtrl.push("DetalhesPage", {id: id})
    console.log("episodio"+id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParceirosPage');
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
