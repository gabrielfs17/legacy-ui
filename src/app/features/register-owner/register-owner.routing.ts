import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterOwnerComponent } from './register-owner.component';


const routes: Routes = [
    {
        path: '',
        component: RegisterOwnerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterOwnerRouting { }