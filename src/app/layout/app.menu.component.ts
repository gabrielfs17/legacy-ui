import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
           
            {
                label: '',
                items: [
                    {
                        label: 'Dashboard', routerLink: '/dashboard'
                        
                    },
                    
                    {
                        label: 'Lojas',
                        items: [
                            {
                                label: 'Vendedores', icon: 'pi pi-users', routerLink: '/clientes'
                            },
                            {
                                label: 'Fornecedores', icon: 'pi pi-users', routerLink: '/fornecedores'
                            },
                        ]
                    },
                    {
                        label: 'Vendas',
                        items: [
                            {
                                label: 'Clientes', icon: 'pi pi-building', routerLink: '/clientes'
                            },
                            {
                                label: 'Representantes', icon: 'pi pi-building', routerLink: '/representantes'
                            },

                            {
                                label: 'Estoque', icon: 'pi pi-building', routerLink: '/'
                            },

                            {
                                label: 'PDV', icon: 'pi pi-building', routerLink: '/pdv'
                            },
                        ]
                    }
                ]
            },
            
        ];
    }
}
