import { HomeService } from './../home/servico/home.service';
import { Curriculo } from './../home/class/curriculo';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.css']
})
export class PdfPageComponent implements OnInit {

  id: string = " ";
  curriculo: Curriculo = new Curriculo();

  emitter: EventEmitter<void> = new EventEmitter();


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

      }
    )

  }





}
