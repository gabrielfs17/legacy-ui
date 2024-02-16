import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {
  
  items: any = [];
  UF = [
    { name: "CE" },
    { name: "PE" },
    { name: "RJ" },
    { name: "SP" },
    { name: "SC" },]
  
  constructor() { }
  
  ngOnInit(): void {
    this.items = [
      {label: 'Cidades'},
      {label: 'Pesquisar Cidades', routerLink: '/cidades'},
      {label: 'Cadastrar Cidades', routerLink: '/cadastrar/cidades'},
    ];
  }

}
