import { PesquisaBairroComponent } from './components/bairro/pesquisa-bairro/pesquisa-bairro.component';
import { CadastroBairroComponent } from './components/bairro/cadastro-bairro/cadastro-bairro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { PesquisaClienteComponent } from './components/cliente/pesquisa-cliente/pesquisa-cliente/pesquisa-cliente.component';
import { PesquisaLogradouroComponent } from './components/logradouro/pesquisa-logradouro/pesquisa-logradouro.component';
import { CadastroLogradouroComponent } from './components/logradouro/cadastro-logradouro/cadastro-logradouro.component';
import { PesquisaCidadeComponent } from './components/cidade/pesquisa-cidade/pesquisa-cidade.component';
import { CadastroCidadeComponent } from './components/cidade/cadastro-cidade/cadastro-cidade.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: 'clientes/cadastro', component: CadastroClienteComponent},
      {path: 'clientes', component: PesquisaClienteComponent},
      {path: 'bairros/cadastro', component: CadastroBairroComponent},
      {path: 'bairros', component: PesquisaBairroComponent},
      {path: 'bairros/:id' , component: CadastroBairroComponent},
      {path: 'logradouros/cadastro', component: CadastroLogradouroComponent},
      {path: 'logradouros', component: PesquisaLogradouroComponent},
      {path: 'cidades', component: PesquisaCidadeComponent},
      {path: 'cadastrar/cidades', component: CadastroCidadeComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
