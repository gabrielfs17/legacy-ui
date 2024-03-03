import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../app.common.module';
import { RegisterOwnerRouting } from './register-owner.routing';
import { RegisterOwnerComponent } from './register-owner.component';
@NgModule({
  imports: [
    CommonModule,
    RegisterOwnerRouting,
    AppCommonModule
  ],
  declarations: [RegisterOwnerComponent]
})
export class RegisterOwnerModule { }