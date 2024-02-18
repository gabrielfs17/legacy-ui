import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../app.common.module';
import { HeaderBreadCrumbModule } from '../../shared/layout/header-breadcrumb/header-breadcrumb.module';
import { OwnerComponent } from './owner.component';
import { OwnerRoutingModule } from './owner.routing';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    OwnerRoutingModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    OwnerComponent
  ]
})
export class OwnerModule { }