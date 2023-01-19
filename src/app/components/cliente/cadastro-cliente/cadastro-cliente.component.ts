import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  genero:any = [];
  items:any = [];
  tipopessoa: string = '';
  autoResize:boolean = true;

  constructor() {
      this.genero.push({name:'Masculino', value: 0});
      this.genero.push({name:'Feminino', value: 1});
      this.genero.push({name:'Indefinido', value: 2});

      this.items = [
        {label: 'Cadastro de Clientes'},
        {label: 'Clientes', routerLink: '/clientes'},
        {label: 'Cadastro', routerLink: '/clientes/cadastro'},
      ];
   }

  ngOnInit(): void {
    
  }

}
