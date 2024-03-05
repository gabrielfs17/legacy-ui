import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LayoutComponent } from './shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./features/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
        {
        path: 'main',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'departments',
                loadChildren: () => import('./features/department/department.module').then(m => m.DepartmentModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'employees',
                loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'owners',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./features/owner/owner.module').then(m => m.OwnerModule)
                    },
                    {
                        path: 'register-owner',
                        loadChildren: () => import('./features/register-owner/register-owner.module').then(m => m.RegisterOwnerModule)
                    }
                ]
            },
            {
                path: 'aboutus',
                loadChildren: () => import('./features/aboutus/aboutus.module').then(m => m.AboutUsModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'contactus',
                loadChildren: () => import('./features/contactus/contactus.module').then(m => m.ContactUsModule),
                canActivate: [AuthGuard]
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
},
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
