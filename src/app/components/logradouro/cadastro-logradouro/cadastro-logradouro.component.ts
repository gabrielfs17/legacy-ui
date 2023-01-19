import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-logradouro',
  templateUrl: './cadastro-logradouro.component.html',
  styleUrls: ['./cadastro-logradouro.component.css']
})
export class CadastroLogradouroComponent implements OnInit {
  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Logradouros'},
      {label: 'Pesquisar Logradouros', routerLink: '/logradouros'},
      {label: 'Cadastrar Logradouros', routerLink: '/cadastrar/logradouros'},
    ];
  }

}
