import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//SAKAI
import { AppLayoutModule } from './layout/app.layout.module';

//FEATURES MODULES
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { PesquisaClienteComponent } from './components/cliente/pesquisa-cliente/pesquisa-cliente/pesquisa-cliente.component';
import { ComponentsModule } from './components/logradouro/logradouro.module';

//PRIMENG
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {AutoFocusModule} from 'primeng/autofocus';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DividerModule} from 'primeng/divider';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PesquisaCidadeComponent } from './components/cidade/pesquisa-cidade/pesquisa-cidade.component';
import { CadastroCidadeComponent } from './components/cidade/cadastro-cidade/cadastro-cidade.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    PesquisaClienteComponent,
    PesquisaCidadeComponent,
    CadastroCidadeComponent,
    FuncionariosComponent,
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    AppRoutingModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    AutoFocusModule,
    CardModule,
    InputMaskModule,
    DropdownModule,
    InputSwitchModule,
    BreadcrumbModule,
    RadioButtonModule,
    FormsModule,
    DividerModule,
    InputTextareaModule,
    TableModule,
    ComponentsModule,
    CoreModule,
    SharedModule,
    ToastModule,
    ConfirmDialogModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
