import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Agence} from '../../models/agence';
import {AgenceService} from '../../shared/agence.service';

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.scss']
})
export class AddAgenceComponent implements OnInit {
newAgence = new Agence();
  constructor(private router: Router , private AgenceService: AgenceService , http: HttpClient) {
  }

  ngOnInit(): void {
  }
  addAgence(){
    this.AgenceService.createAgence(this.newAgence).subscribe(comp => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });

    });


}}
