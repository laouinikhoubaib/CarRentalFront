import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Agence} from '../models/agence';
import {AgenceService} from '../shared/agence.service';
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
  agenceId: string;
  eventDialog: boolean;
  eventDialogg: boolean;
  submitted: boolean;
  private routeSub: Subscription;
  newAgence = new Agence();
  constructor( private router: Router, private messageService: MessageService, private service: AgenceService,  private route: ActivatedRoute,) {}


  ngOnInit(): void {
    this.routeSub = this.service.getAgences().subscribe(res => {console.log(res);
      this.listagence = res;
    });
    this.route.paramMap.subscribe(params => {
      this.agenceId = params.get('id');
      this.loadAgence();
    });
  }


  deleteAgence(id: string) {this.service.DeleteAgence(id).subscribe(p => {
      console.log('delete');
      this.router.navigate(['/admin/agence']);
    });
  }
  addAgence(){
    this.service.createAgence(this.newAgence).subscribe(comp => {
      this.router.navigate(['/admin/agence']).then(() => {
        window.location.reload();
      });

    });


  }
  loadAgence() {
    this.service.getAgence(this.agenceId).subscribe(agence => {
      this.agence = agence;
    });
  }

  updateAgence() {
    this.service.updateAgence(this.agenceId, this.agence).subscribe(agence => {
      this.agence = agence;
      console.log('Agence mise à jour avec succès !');
    });
  }

  hideDialog() {
    this.eventDialogg = false;
    this.submitted = false;
  }

  openNew() {
    this.listagence = [];
    this.submitted = false;
    this.eventDialog = true;
  }

  openNeww() {
    this.listagence = [];
    this.submitted = false;
    this.eventDialogg = true;
  }

}
