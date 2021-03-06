import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TwdServiceProvider } from "../../providers/twd-service/twd-service";
import { Episode } from "../../app/models/episode";

@IonicPage()
@Component({
  selector: 'page-detalhamento',
  templateUrl: 'detalhamento.html',
})
export class DetalhamentoPage {

  public id;
  public obg: any;
  public episode: Episode;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public twdService: TwdServiceProvider) {

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
    console.log('ionViewDidLoad DetalhamentoPage');
  }

}
