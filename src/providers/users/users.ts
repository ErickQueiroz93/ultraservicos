import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  private API_URL = 'http://ultraconsultas.com.br/apiUltraServicos/login.php'

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  acessar(usuario: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        usuario: usuario,
        senha: senha
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
