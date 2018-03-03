import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PagarProvider {

  private API_URL = 'http://ultraconsultas.com.br/apiUltraServicos/pagar.php'

  constructor(public http: HttpClient) {
    console.log('Hello PagarProvider Provider');
  }

  pagarOrdemServico(valor: string, id_ordem: string) {

    return new Promise((resolve, reject) => {
      var data = {
        valor: valor,
        id_ordem: id_ordem
      };
 
      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          if(result.status == null)
            reject("error.json()");  
          else
            resolve(result);

            console.log(result);
        },
        (error) => {
          reject(error);
          console.log(error);
        });
    });
  }

}
