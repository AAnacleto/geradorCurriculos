import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Endereco } from './class/endereco';
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

  cardDados: boolean = false;
  cardEnd: boolean = false;
  cardObj: boolean = false;
  cardForm: boolean = false;
  cardIdiomas: boolean = false;
  cardCursos: boolean = false;

  endereco: Endereco = new Endereco();

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

}
