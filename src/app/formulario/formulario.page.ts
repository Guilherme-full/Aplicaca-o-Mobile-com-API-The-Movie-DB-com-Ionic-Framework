import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nome: string;
  sobrenome: string;
  estado: string;
  cidade: string;
  email: string;
  senha: string;
  usuario: string;

  constructor() { }

  ngOnInit() {
  }

  limpar(){
    this.nome = '';
    this.sobrenome = '';
    this.estado = '';
    this.cidade = '';
    this.email = '';
    this.senha = '';
  }

 
}
