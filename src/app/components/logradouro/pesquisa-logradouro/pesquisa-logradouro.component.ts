
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-logradouro',
  templateUrl: './pesquisa-logradouro.component.html',
  styleUrls: ['./pesquisa-logradouro.component.css']
})
export class PesquisaLogradouroComponent implements OnInit {
  logradouroArray=[{id:1, descricao: 'Perto do Km 19',cep:'61760000'}]
  constructor() {}

  ngOnInit(): void {
  }

}
