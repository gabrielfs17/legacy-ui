import { Component, OnInit } from '@angular/core';
import { RouteStateService } from '../../core/services/route-state.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit {
  columns: any[];

  owners: any[];

  pageSize: number;

  constructor(
    private routeStateService: RouteStateService 
  ){}

  ngOnInit() {

    this.pageSize = 1;

    this.columns = [
      { field: 'Codigo', header: 'Código' },
      { field: 'Nome', header: 'Nome' },
      { field: 'CPF', header: 'CPF' },
      { field: 'Profissao', header: 'Profissão' }
    ];

    this.owners = [
      {id:'1' , nome:'Jose Aldo Felipe', cpf:'789.909.982-98', profissao:'Contador'}
    ];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // ... etc...
}
}
