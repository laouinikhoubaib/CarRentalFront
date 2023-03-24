import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Agence} from '../models/agence';
import {AgenceService} from '../shared/agence.service';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }

        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {
                text-align: center;
            }

            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `],
  providers: [MessageService, ConfirmationService]
})

export class AgenceComponent implements OnInit {
  listagence: Agence[];
  agence1: Agence = new Agence();
  agence2: Agence = new Agence();
  agence: Agence;

  eventDialog: boolean;
  submitted: boolean;
  private routeSub: Subscription;
  newAgence = new Agence();
  constructor(private router: Router, private messageService: MessageService, private service: AgenceService) { }


  ngOnInit(): void {
    this.routeSub = this.service.getAgences().subscribe(res => {console.log(res); this.listagence = res; });
  }


  deleteAgence(id: string): void{
    this.service.deleteAgence(id).subscribe(() => this.service.getAgences().subscribe(res => {console.log(res); this.listagence = res; }));
    this.router.navigate(['']);
  }

  addAgence(){
    this.service.createAgence(this.newAgence).subscribe(comp => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });

    });


  }
  updateAgence(id: string) {
    if (this.agence1.nom === ''){this.agence1.nom = this.agence2.nom;}
    this.service.updateAgence(id, this.agence1).subscribe(data => {
          this.router.navigate(['agence']).then(() => {
            window.location.reload();
          });
        },
        );
  }

  openNew() {
    this.listagence = [];
    this.submitted = false;
    this.eventDialog = true;
  }
}
