import { Curriculo } from './../class/curriculo';
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

   salvarCurriculo(curriculo: Curriculo){
     return this.http.post('http://localhost:3000/Curriculo', curriculo);
   }

   consultarCurriculo(id: string){
     return this.http.get('http://localhost:3000/Curriculo?id='+ id);
   }
}
