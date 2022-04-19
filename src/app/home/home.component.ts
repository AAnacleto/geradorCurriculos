import { Cursos } from './class/cursos';
import { Idiomas } from './class/idiomas';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
import { Formacao } from './class/formacao';
import { PdfPageComponent } from '../pdf-page/pdf-page.component';
import { Router } from '@angular/router';
//import * as html2pdf from 'html2pdf.js';
// import { jsPDF } from "jspdf";
// import html2canvas from 'html2canvas';



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
  cardExp: boolean = false;
  cardIdiomas: boolean = false;
  cardCursos: boolean = false;


  endereco: Endereco = new Endereco();
  curriculo: Curriculo = new Curriculo();
  experiencia: Experiencia_Profissional = new Experiencia_Profissional();
  formacao: Formacao = new Formacao();
  idiomas: Idiomas = new Idiomas();
  cursos: Cursos = new Cursos();
  retornoStatus: Curriculo;


  turnos: any[] = [{ id: 1 , turno:"Manhã"},{id: 2, turno: "Tarde"},{ id: 3 , turno:"Noite"}];
  statusCurso: any[] = [{ id: 1 , status:"Cursando"},{id: 2, status: "Terminado"},{ id: 3 , status:"Trancado"}];
  proeficiencia: any[]= [{ id: 1 , nivel:"Iniciante"},{id: 2, nivel: "Intermediario"},{ id: 3 , nivel:"Fluente"}];

  @ViewChild('curriculoPDF', { static: true, read: ViewContainerRef }) curriculoPDF: ViewContainerRef;

  html2pdf: any;

  constructor( public homeservice: HomeService,
               private router: Router ) { }

  ngOnInit(): void {

    this.curriculo.experiencia.push(this.experiencia = new Experiencia_Profissional());
    this.curriculo.formacao.push(this.formacao = new Formacao());
    this.curriculo.cursos.push(this.cursos = new Cursos());
    this.curriculo.idiomas.push(this.idiomas = new Idiomas());
  }

  // selectItems(): void {

  //   this.createPDF();
  // }

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

  abrirExperiencia(){
    this.cardExp = !this.cardExp;
  }

  abrirIdiomas(){
    this.cardIdiomas = !this.cardIdiomas;
  }

  abrirCursos(){
    this.cardCursos = !this.cardCursos;
  }

  buscarCEP(){
    console.log(this.curriculo.endereco.cep);
    this.homeservice.buscarCEP(this.curriculo.endereco.cep).subscribe(
      data => {
        this.curriculo.endereco = (data as Endereco);
        console.log(this.endereco);

      }
    )
  }

  cadastrarExperiencia(){
    this.experiencia = new Experiencia_Profissional();
    this.curriculo.experiencia.push(this.experiencia);
  }
  removerExperiencia(i: any){
  this.curriculo.experiencia.splice(i);
  }

  cadastrarFormacao(){
    this.formacao = new Formacao();
    this.curriculo.formacao.push(this.formacao);
  }
  removerFormacao(i: any){
  this.curriculo.formacao.splice(i);
  }

  cadastrarIdioma(){
    this.idiomas = new Idiomas();
    this.curriculo.idiomas.push(this.idiomas);
  }
  removerIdiomas(i: any){
  this.curriculo.idiomas.splice(i);
  }

  cadastrarCurso(){
    this.cursos = new Cursos();
    this.curriculo.cursos.push(this.cursos);
  }
  removerCurso(i: any){
  this.curriculo.cursos.splice(i);
  }

  cadastrarCurriculo(){
    console.log(this.curriculo);
    this.homeservice.salvarCurriculo(this.curriculo).subscribe(
      data =>{
        this.retornoStatus = (data as Curriculo);
        console.log(data);
        console.log(this.retornoStatus);

        this.router.navigate(['curriculo/'+ this.retornoStatus.id]);

      }
    )

  }

//   createPDF(){
//     this.curriculoPDF.clear();
//     const factory = this.resolver.resolveComponentFactory(PdfPageComponent);
//     const componentRef = this.curriculoPDF.createComponent(factory);

//     componentRef.instance.curriculo = this.curriculo;

//     componentRef.instance.emitter.subscribe(() => {
//       const config = {
//         html2canvas: {
//           scale: 1,
//           scrollX: 0,
//           scrollY: 0,
//         },
//       };

//       this.print(componentRef.location.nativeElement, config);
//       componentRef.destroy();

//     });

// }

// private print(content: any, config: any): void {
//   html2pdf()
//     .set(config)
//     .from(content)
//     .toPdf()
//     .outputPdf('dataurlnewwindow');
// }



}
