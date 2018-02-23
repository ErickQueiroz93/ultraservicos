import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CancelarProvider {

  private API_URL = 'http://ultraconsultas.com.br/apiUltraServicos/cancelarOS.php'

  constructor(public http: HttpClient) {
    console.log('Hello CancelarProvider Provider');
  }

  canOS(descricao: string, id_ordem: string) {

    return new Promise((resolve, reject) => {
      var data = {
        descricao: descricao,
        id_ordem: id_ordem
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
