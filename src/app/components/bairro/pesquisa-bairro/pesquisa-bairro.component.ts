import { BairroFiltro, BairroService } from '../bairro.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';


@Component({
  selector: 'app-pesquisa-bairro',
  templateUrl: './pesquisa-bairro.component.html',
  styleUrls: ['./pesquisa-bairro.component.css']
})
export class PesquisaBairroComponent implements OnInit {

    //Variáveis locais
    bairroArray: any[] = [] ;

    filtro = new BairroFiltro();
  
    totalRegistros: number = 0;
  
    @ViewChild('tabela') grid!: Table;   //Pega a variavel que está no HTML e referencia para ser usada.

    constructor(
      private bairroService: BairroService,
      private messageService: MessageService,
      private confirmation: ConfirmationService,
      private errorHandle: ErrorHandlerService
    ) { }

  ngOnInit(): void {
  }

  pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.bairroService.pesquisar(this.filtro)
        .then(resultado => {
          this.totalRegistros = resultado.total;
          this.bairroArray = resultado.bairro;
        })
        .catch(erro => this.errorHandle.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = (event!.first! / event!.rows!);  //Conta para dividir qual a página na naveção
    this.pesquisar(pagina);
  }

  excluir(bairro: any) {
    this.bairroService.excluir(bairro.id)
    .then(() => {
      this.grid.reset()
      this.messageService.add({ severity: 'success', detail: 'Bairro excluído com sucesso!', life: 1500 });
    })
    .catch(erro => this.errorHandle.handle(erro));
  }  

  confirmarExclusao(bairro: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir o registro?',
      accept: () => {
        this.excluir(bairro);
      }
    });
  }

}
