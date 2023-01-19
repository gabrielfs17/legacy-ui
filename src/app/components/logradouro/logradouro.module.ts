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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BairroModule } from '../bairro/bairro.module';
import { CadastroLogradouroComponent } from './cadastro-logradouro/cadastro-logradouro.component';
import { PesquisaLogradouroComponent } from './pesquisa-logradouro/pesquisa-logradouro.component';


@NgModule({
    declarations: [
    
    CadastroLogradouroComponent,
    PesquisaLogradouroComponent
  ],
    imports: [
      CommonModule,
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
      DividerModule,
      InputTextareaModule,
      TableModule,
    ],
    exports: [
        CadastroLogradouroComponent

      ]
})
export class ComponentsModule { }
