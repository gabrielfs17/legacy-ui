import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { Endereco } from '../../models/endereco';
import { ClienteService } from '../../services/endereco.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  items:any = [];
  steps: any =[];
  tabelaEnderecos:Endereco[]

  cliente: Cliente = new Cliente();
  visualizarModal:boolean;

  constructor(
    private clienteService:ClienteService,
    private router:Router
    )
    
    {
      this.items = [
        {label: 'Cadastro de Clientes'},
        {label: 'Clientes', routerLink: '/clientes'},
        {label: 'Cadastro', routerLink: '/clientes/cadastro'},
      ];
      
   }

  ngOnInit(): void {
    this.listarEnderecos();
  }

  listaClientes(){
    this.router.navigate(['/clientes'])
  }

  listarEnderecos() {
    this.clienteService.findAllEnderecos().subscribe((data) => {
      this.tabelaEnderecos = data;
      console.log(this.tabelaEnderecos);
    });
  }

  salvarCliente(){
    this.clienteService.createClientes(this.cliente)
    .subscribe(data => {
      console.log(data)
      this.listaClientes();
    })
  }

  AbrirModal() {
    this.visualizarModal = true;
}

  onSubmit(){
    this.salvarCliente()
  }

}
