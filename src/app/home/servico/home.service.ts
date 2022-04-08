import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  retorno: string = " ";

  constructor(private http: HttpClient) { }

   buscarCEP(cep: string){
     this.retorno = cep.trim();
     return this.http.get('https://viacep.com.br/ws/'+this.retorno+'/json/');
   }
}
