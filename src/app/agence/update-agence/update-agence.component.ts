import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Agence} from '../../models/agence';
import {AgenceService} from '../../shared/agence.service';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.scss']
})
export class UpdateAgenceComponent implements OnInit {
    post1: Agence = new Agence();
    post2: Agence = new Agence();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private compalintService: AgenceService ) { }

  ngOnInit(): void {}
 }
