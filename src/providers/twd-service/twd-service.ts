import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class TwdServiceProvider {
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load(id_parceiro: string) {
    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordens.php?id_parceiro=${id_parceiro}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadTodas(id_parceiro: string) {
    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordensTodas.php?id_parceiro=${id_parceiro}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data); 
        });
    });
  }

  loadParceiros(id_parceiro: string) {
    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/parceiros.php?id_parceiro=${id_parceiro}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadCanceladas(id_parceiro: string) {
    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordensCanceladas.php?id_parceiro=${id_parceiro}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadFinalizadas(id_parceiro: string) {
    return new Promise(resolve => {
      this.http
        .get(
          `http://ultraconsultas.com.br/apiUltraServicos/ordensFinalizadas.php?id_parceiro=${id_parceiro}`
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