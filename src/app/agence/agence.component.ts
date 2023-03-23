import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Agence} from '../models/agence';
import {AgenceService} from '../shared/agence.service';


@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {
  listagence: Agence[];
  agence1: Agence = new Agence();
  agence2: Agence = new Agence();
  private routeSub: Subscription;
  constructor(private router: Router, private service: AgenceService) { }

  ngOnInit(): void {
    this.routeSub = this.service.getAgences().subscribe(res => {console.log(res); this.listagence = res; });
  }

  deleteAgence(id: string) {
    this.service. deleteAgence(id).subscribe(p => {
      console.log('delete');

    });


  }
  updateAgence(id: string) {
    if (this.agence1.phoneNumber === ''){this.agence1.phoneNumber = this.agence2.phoneNumber;}
    this.service.updateAgence(id, this.agence1).subscribe(data => {
          this.router.navigate(['agence']).then(() => {
            window.location.reload();
          });
        },
        );
  }
}
