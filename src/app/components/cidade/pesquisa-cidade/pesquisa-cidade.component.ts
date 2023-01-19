import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-cidade',
  templateUrl: './pesquisa-cidade.component.html',
  styleUrls: ['./pesquisa-cidade.component.css']
})
export class PesquisaCidadeComponent implements OnInit {
  cidadeArray=[{id:1, descricao: ' Cidade de FORTALEZA',uf:'CE'}]
  
  constructor(){}

  ngOnInit(): void {
  }

}
