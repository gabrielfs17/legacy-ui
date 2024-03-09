import { Component, OnInit } from '@angular/core';

interface Naturalidades{
  name: string;
  code: string;
}

interface Gestores{
name: string
}

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrl: './register-owner.component.css'
})

export class RegisterOwnerComponent implements OnInit {

  activeIndex: number = 0;
  rounded: boolean

  pageSize = 1;
  columns: any[];

  naturalidades: Naturalidades[] | undefined;
  selectedNaturalidade: Naturalidades[] | undefined;

  options: [] | undefined
  options2: [] | undefined

  gestores: Gestores[] | undefined;
  selectedGestor: Gestores[] | undefined;

  contas: any[];
  conjugues: any[];

  columnsHistorico: any[];

  ngOnInit(): void {

    this.naturalidades = [
      {name:'Brasileiro', code:'BR'},
      {name:'Frances', code:'FR'},
      {name:'Japonês', code:'JP'}
    ]

    this.gestores = [
      {name:'(Nenhum)'}
    ]

    this.columns = [
      { field: 'Codigo', header: 'Código' },
      { field: 'Tipo', header: 'Tipo' },
      { field: 'Agencia', header: 'Agencia' },
      { field: 'Nconta', header: 'N° Conta' },
      { field: 'Favorecido', header: 'Favorecido' },
      { field: '', header: '' }
    ];

    this.columnsHistorico = [
      {field:'Tipo Proprietario cod', header:'Tipo Proprietario cod'},
      {field:'Tipo Endereço', header:'Tipo endereço'},
      {field:'Tipo Endereço', header:'N°'},
      {field:'Complemento', header:'Complemento'},
      {field:'Bairro', header:'Bairro'},
      {field:'', header:''}
    ]

    this.contas = [
      {codigo:'1' , tipo:'Corrente', agencia:'001', nConta:'1000', favorecido:'Alex'}
    ];
  }
}
