import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorComponent } from './shared/error/error.component';
import { NgPrimeModule } from './app.ngprime.module';
import { CustomMinDirective } from './core/validators/custom-min-validator.directive';
import { CustomMaxDirective } from './core/validators/custom-max-validator.directive';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomMinDirective,
        CustomMaxDirective,
        ErrorComponent
    ]
})
export class AppCommonModule {

}