import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FinalizarProvider {

  private API_URL = 'http://ultraconsultas.com.br/apiUltraServicos/finalizarOS.php'

  constructor(public http: HttpClient) {
    console.log('Hello FinalizarProvider Provider');
  }

  finOS(valor: string, descricao: string, id_parceiro: string) {

    return new Promise((resolve, reject) => {
      var data = {
        valor: valor,
        descricao: descricao,
        id_parceiro: id_parceiro
      };
 
      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          if(result == null)
            reject("error.json()");  
          else
            resolve(result);

            console.log(result);
        },
        (error) => {
          reject(error.json());
          console.log(error);
        });
    });
  }

}
