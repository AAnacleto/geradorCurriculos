import { HomeService } from './../home/servico/home.service';
import { Curriculo } from './../home/class/curriculo';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcroFormPasswordField, jsPDF } from 'jspdf';
import { ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.css']
})
export class PdfPageComponent implements OnInit {

  id: string = " ";
  curriculo: Curriculo = new Curriculo();
  data = new Date();

  emitter: EventEmitter<void> = new EventEmitter();

  @ViewChild('principal', {static: false}) el!: ElementRef;

  constructor(public homeservice: HomeService, private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routeActivated.snapshot.params.id;
    setTimeout(()=>{
      this.buscarCurriculo();

 }, 2000);
  }

  buscarCurriculo(){
    this.homeservice.consultarCurriculo(this.id).subscribe(
      data => {
        this.curriculo = (data as Curriculo[])[0];
        console.log(this.curriculo);

        const dataCompleta = this.curriculo.dados.data_nascimento.split("-")
        const anoNasc = parseInt(dataCompleta[0])
        const anoAtual = this.data.getFullYear()
        this.curriculo.dados.idade = anoAtual - anoNasc;

      }
    )

  }

  printPDF(){
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('Curriculo.pdf');
      }
    })
  }







}
