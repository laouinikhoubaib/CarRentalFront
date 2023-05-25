import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import {ReservationServiceService} from '../../shared/reservation-service.service';
import {VehiculeService} from '../../shared/vehicule.service';
import {Reservation} from '../../models/reservation';

@Component({
  selector: 'app-add-reservation-front',
  templateUrl: './add-rental-contrat-front.component.html',
  styleUrls: ['./add-rental-contrat-front.component.css']
})
export class AddVehiculeFrontComponent implements OnInit {

  contract = new Reservation();

   idvehicule: any;
   today = new Date();
   month = this.today.getMonth();
   year = this.today.getFullYear();



  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private rentalService: ReservationServiceService,
    private router: Router,
    private service: VehiculeService
  ) {
    this.idvehicule = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
   

  }




  addRentalContrat() {
    this.rentalService.addReservation(this.contract, this.idvehicule).pipe(
      catchError((error) => {
        // this.modalError();
        console.log(error)
this.alertError();
        return throwError(() => new Error(error));
      }),
    ).subscribe((res) => {
      this.successNotification();

    });
    // show success alert


  }

  alertError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error is generated when adding the contract. Please check availability',
    });
  }
  successNotification() {
    Swal.fire('Contract added successfuly!');
  }


  disponile(data: any) {
    console.log(data.idvehicule)
    this.service.getDisponible(data.offreid).subscribe(res => {
      console.log(res)
      alert(res)
    }, err => {
      alert('error de serveur')
    })
  }

}
