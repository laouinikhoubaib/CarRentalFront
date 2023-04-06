import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../shared/authentication.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import {Agence} from '../../models/agence';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser: User;
  allUsers: Array<User> = [];
  profilPicture!: string;
  users: User[];
  agenceId: number;
  agence: Agence | null = null;

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private router: Router ) {
    this.authenticationService.currentUser.subscribe( data => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    this.agenceId = 1;
    this.getAgence();

    this.userService.getUserProfilPicture().subscribe(xx => {
      this.profilPicture = xx.split('\\').pop();
    }, err => {
      this.profilPicture = "https://res.cloudinary.com/diubo1tzp/image/upload/v1650587140/defaultProfilePicture_drigsj.png";
    });

    this.userService.getAllUser().subscribe(users => {
      this.allUsers = users;
    });

  }
  getUsersByAgence(): void {
  }

  getAgence(): void {
    this.userService.getAgenceById(this.agenceId)
        .subscribe(agence => {
          this.agence = agence;
          if(this.agence != null) {
            console.log(this.agence.nom);
          }
        });
  }

  navigateTo(userId: string){
    const url = `user/profil/${userId}`;
    console.log(url);
    this.router.navigate([url])
        .then(() => {
          window.location.reload();
        });
  }

}
