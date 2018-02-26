import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TwdServiceProvider } from "../../providers/twd-service/twd-service";
import { Episode } from "../../app/models/episode";
//import { FinalizarPage } from "../finalizar/finalizar";
//import { CancelarPage } from "../cancelar/cancelar";

@IonicPage()
@Component({
  selector: "page-po",
  templateUrl: "po.html"
})
export class PoPage {
  public id;
  public obg: any;
  public episode: Episode;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public twdService: TwdServiceProvider
  ) {
    this.id = navParams.get("id");
    this.episode = new Episode();

    console.log("erick"+this.id)

    this.twdService.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.episode.name = this.obg.name;
      this.episode.airdate = this.obg.airdate;
      this.episode.summary = this.obg.summary;
      this.episode.thumb = this.obg.thumb;
      console.log(this.episode);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PoPage");
  }
  /*irPaginaFinalizar(){
    this.navCtrl.push(FinalizarPage, {id: this.navParams.get("id")})
    console.log("ordem de servico"+this.id)
  }
  irPaginaCancelar(){
    this.navCtrl.push(CancelarPage, {id: this.navParams.get("id")})
    console.log("ordem de servico"+this.id)
  }*/
}