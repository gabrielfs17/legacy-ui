import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
})
export class PesquisaClienteComponent implements OnInit {
  
  clienteArray = [
    {id:1, nome: 'João'},
    {id:2, nome: 'Maria'},
    {id:3, nome: 'José'}
  ]

  constructor() { 

  }

  ngOnInit(): void {
  }

}
