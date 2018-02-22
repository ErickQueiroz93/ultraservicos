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
<<<<<<< HEAD
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        /*.get(
          `https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes`
        )*/
=======
    

    return new Promise(resolve => {
      this.http
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
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

<<<<<<< HEAD
  getEpisodeById(id: number) {
    //if (this.data) {
      //return Promise.resolve(this.data);
    //}

    return new Promise(resolve => {
      this.http
=======
  loadCanceladas() {

    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordensCanceladas.php`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadFinalizadas() {
    

    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordensFinalizadas.php`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getEpisodeById(id: number) {
    return new Promise(resolve => {
      this.http
>>>>>>> 17ab37549988e2bfa235d761804a7e12c83ba26b
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