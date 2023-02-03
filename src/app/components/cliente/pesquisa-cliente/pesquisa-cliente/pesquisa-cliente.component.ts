import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from 'src/app/components/models/cliente';
import { ClienteService } from 'src/app/components/services/endereco.service';

@Component({
  selector: 'app-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
})
export class PesquisaClienteComponent implements OnInit {
 
  clientesTable: Cliente[];

  constructor(private clienteService:ClienteService,router:Router) {}
   
  findAll() {
    this.clienteService.findAll().subscribe((data) => {
      this.clientesTable = data;
      console.log(this.clientesTable);
    });
  }

 
  ngOnInit(): void {
    this.findAll()
  }
 

}
