import { Cursos } from "./cursos";
import { Dados } from "./dados";
import { Endereco } from "./endereco";
import { Experiencia_Profissional } from "./experiencia_profissional";
import { Formacao } from "./formacao";
import { Idiomas } from "./idiomas";

export class Curriculo {
  id: number = 0;
  dados: Dados = new Dados();
  endereco: Endereco = new Endereco();
  objetivo: string = " ";
  formacao: Formacao[] = [];
  experiencia: Experiencia_Profissional[] = [];
  idiomas: Idiomas[] = [];
  cursos: Cursos[] = [];
}
