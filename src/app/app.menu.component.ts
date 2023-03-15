import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Main', icon: 'pi pi-home',
                items: [
                    {label: 'Admin Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin']},
                    {label: 'Front office', icon: 'pi pi-fw pi-directions', routerLink: ['/user/landing']}
                ]
            },
            {separator: true},
            {
                label: 'Sections', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    {label: 'Réservations', icon: 'pi pi-fw pi-id-card', routerLink: ['réservation']},
                    {label: 'Contrats et factures', icon: 'pi pi-fw pi-comment', routerLink: ['contrat']},
                    {label: 'Calendrier', icon: 'pi pi-fw pi-star-o', routerLink: ['Calendrier']},
                    {label: 'Gestion des véhicules', icon: 'pi pi-fw pi-file', routerLink: ['vehicules']},
                    {label: 'Complaints', icon: 'pi pi-exclamation-circle', routerLink: ['complaint']},

                ]
            },
        ];
    }
}
