import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaint';
import { ComplaintService } from '../shared/complaint.service';
import {AuthenticationService} from '../shared/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Agence} from '../models/agence';
import {Subscription} from 'rxjs/dist/types';


@Component({
    selector: 'app-complaint',
    templateUrl: './complaint.component.html',
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
export class ComplaintComponent implements OnInit {


    complaints: Complaint[];
    userId: number;
    complaint: Complaint;
    private routeSub: Subscription;
    complaintsByType: string[] = [];
    selectedType: string;

    constructor(private router: Router, private messageService: MessageService, private complaintService: ComplaintService) {
    }
    ngOnInit(): void {
        this.routeSub = this.complaintService.retrieveAllComplaints().subscribe(res => {console.log(res);
            this.complaints = res;
        });
        this.getComplaintsByType();
    }

    deleteComplaint(id: string) {this.complaintService.deleteComplaint(id).subscribe(p => {
        console.log('delete');
        this.router.navigate(['/superadmin/complaint']);
    });
    }

    updateUntreatedComplaint(id: string) {
                this.complaintService.updateComplaint(id).subscribe(p => {
                    console.log('update');
                    this.router.navigate(['/superadmin/complaint']);
                });
            }
    getComplaintsByType() {
        this.complaintService
            .getComplaintsByType(this.selectedType)
            .subscribe((res) => {
                console.log(res);
                this.complaintsByType = res;
            });
    }
}
