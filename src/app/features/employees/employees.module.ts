import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../app.common.module';
import { HeaderBreadCrumbModule } from '../../shared/layout/header-breadcrumb/header-breadcrumb.module';
import { EmployeesRoutingModule } from './employees.routing';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }