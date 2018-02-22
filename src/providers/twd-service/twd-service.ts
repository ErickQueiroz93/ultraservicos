import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class TwdServiceProvider {
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        /*.get(
          `https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes`
        )*/
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordens.php`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getEpisodeById(id: number) {
    //if (this.data) {
      //return Promise.resolve(this.data);
    //}

    return new Promise(resolve => {
      this.http
        .get(`http://ultraconsultas.com.br/apiUltraServicos/ordem.php?id=${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          console.log("http://ultraconsultas.com.br/apiUltraServicos/ordem.php?id="+id);
          resolve(this.data);
        });
    });
  }
}