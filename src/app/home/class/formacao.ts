export class Formacao{
  id: number = 0;
  nome_faculdade: string = " ";
  curso: string = " ";
  periodo: string = " ";
  turno: string = " ";
  data_inicio: string = " ";
  data_termino: string = " ";
  status: string = " ";
  statusCurso: any[] = [{ id: 1 , status:"Cursando"},{id: 2, status: "Terminado"},{ id: 3 , status:"Trancado"}];
}
