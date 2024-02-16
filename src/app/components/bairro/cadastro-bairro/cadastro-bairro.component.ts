import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { BairroModel } from 'src/app/core/model';
import { BairroService } from '../bairro.service';

@Component({
  selector: 'app-cadastro-bairro',
  templateUrl: './cadastro-bairro.component.html',
  styleUrls: ['./cadastro-bairro.component.css']
})
export class CadastroBairroComponent implements OnInit {

  items: any = [];
  bairroModel:BairroModel = new BairroModel();
  
  constructor(
    private bairroService: BairroService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private errorHandle: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Endereços'},
      {label: 'Bairros', routerLink: '/bairros'},
      {label: 'Cadastro', routerLink: '/bairros/cadastro'},
    ];

    const idBairro = this.route.snapshot.params['id'];

    if (idBairro) {
      this.carregarBairro(idBairro);
    }
  }

  get editando() {
    return Boolean(this.bairroModel.id);
  }

  carregarBairro(id: number) {
    this.bairroService.buscarPorId(id)
      .then(bairroModel => {
        this.bairroModel = bairroModel; 
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  salvar(form: NgForm) {
    this.bairroService.adicionar(this.bairroModel)
      .then(()=> {
        this.messageService.add({ severity: 'success', detail: 'Bairro adicionado com sucesso!', life: 1500 });
        
        form.reset();
        this.bairroModel = new BairroModel();
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

}
