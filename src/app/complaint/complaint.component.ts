import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AgenceService} from '../shared/agence.service';
import {ComplaintService} from '../shared/complaint.service';
import {Complaint} from '../models/complaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  complaint: Complaint = new Complaint();
  complaints: Complaint[] = [];
  complaintId: number;
  userId: number;

  constructor( private router: Router, private messageService: MessageService, private complaintService: ComplaintService,  private route: ActivatedRoute,) {}


  ngOnInit(): void {
    this.complaintService.getAllComplaints().subscribe(
        (response: any) => {
          this.complaints = response;
        },
        (error: any) => {
          console.log(error);
        }
    );
  }
  addComplaint(): void {
    this.complaintService.addComplaint(this.complaint, 1).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
    );
  }
  deleteComplaint(): void {
    this.complaintService.deleteComplaint(this.complaintId).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
    );
  }
    updateComplaint(): void {
        this.complaintService.updateComplaint(this.complaintId, this.complaint).subscribe(
            (response: any) => {
                console.log(response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    treatComplaint(): void {
        this.complaintService.treatComplaint(this.complaintId, this.complaint, this.userId).subscribe(
            (response: any) => {
                console.log(response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

}
