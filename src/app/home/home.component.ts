import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { Curriculo } from './class/curriculo';


import { Endereco } from './class/endereco';
import { Experiencia_Profissional } from './class/experiencia_profissional';
import { HomeService } from './servico/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faPlusCircle = faPlusCircle;
  faPlus = faPlus;
  faDash = faMinus;

  cardDados: boolean = false;
  cardEnd: boolean = false;
  cardObj: boolean = false;
  cardForm: boolean = false;
  cardIdiomas: boolean = false;
  cardCursos: boolean = false;

  endereco: Endereco = new Endereco();
  curriculo: Curriculo = new Curriculo();
  experiencia: Experiencia_Profissional = new Experiencia_Profissional();

  constructor( public homeservice: HomeService) { }

  ngOnInit(): void {
  }

  abrirDados(){
    this.cardDados = !this.cardDados;
  }

  abrirEndereco(){
    this.cardEnd = !this.cardEnd;
  }

  abrirObjetivo(){
    this.cardObj = !this.cardObj;
  }

  abrirFormacao(){
    this.cardForm = !this.cardForm;
  }

  abrirIdiomas(){
    this.cardIdiomas = !this.cardIdiomas;
  }

  abrirCursos(){
    this.cardCursos = !this.cardCursos;
  }

  buscarCEP(){
    console.log(this.endereco.cep);
    this.homeservice.buscarCEP(this.endereco.cep).subscribe(
      data => {
        this.endereco = (data as Endereco);
        console.log(this.endereco);

      }
    )
  }

  cadastrarExperiencia(){
    this.curriculo.experiencia.push(this.experiencia);
  }
  removerExperiencia(i: any){
  this.curriculo.experiencia.splice(i);
  }

}
