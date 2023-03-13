import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../shared/authentication.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  allUsers: Array<User> = [];

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(users => {
      this.allUsers = users;
    });
  }

}
