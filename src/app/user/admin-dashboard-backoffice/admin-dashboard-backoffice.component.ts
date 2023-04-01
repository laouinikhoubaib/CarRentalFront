import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Product} from '../../demo/domain/product';
import {ProductService} from '../../demo/service/productservice';
import {BreadcrumbService} from '../../app.breadcrumb.service';
import {AuthenticationService} from '../../shared/authentication.service';
import {UserService} from '../../shared/user.service';
import {Customer, Representative} from '../../demo/domain/customer';
import {Table} from 'primeng/table';
import {CustomerService} from '../../demo/service/customerservice';
import {User} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-admin-dashboard-backoffice',
  templateUrl: './admin-dashboard-backoffice.component.html',
  styleUrls: ['./admin-dashboard-backoffice.component.scss'],
})
export class AdminDashboardBackofficeComponent implements OnInit {


  // allAdmins: Array<User> = [];
  lineData: any;
  // allUsers: Array<User> = [];
  selectedCustomers1: any;
  // users: any[];
  userId: number;


  userss: Array<User> = [];
    nomAgence: string;
    admins: Array<User> = [];


    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService, authenticationService: AuthenticationService, private userService: UserService, private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    this.breadcrumbService.setItems([
      {label: 'Dashboard', routerLink: ['/']}
    ]);


  }

    ngOnInit() {

        // this.userService.getAllAdmins().subscribe( allAdmins => {
        //   this.allAdmins = allAdmins;
        // });
        //
        //   this.userService.getAllUser().subscribe(users => {
        //   this.allUsers = users;
        // });

        // this.userService.findAdminByNomAgence('nomAgence').subscribe(data => {
        //   this.users = data;
        // });
        //
        // this.route.queryParams.subscribe(params => {
        //   this.userId = params['userId'];
        //   this.getUsersBySameAgence();
        // });

        this.userService.getCurrentUser().subscribe(
            user => {
                this.userId = user.userId;

                // Obtenir tous les utilisateurs de la même agence
                this.userService.getUsersBySameAgence(this.userId).subscribe(
                    userss => {
                        this.userss = userss;
                    },
                    error => {
                        console.log(error);
                    }
                );

                // Obtenir tous les admins de la même agence triés par agence
                this.userService.getUsersBySameAgence(this.userId).subscribe(users => {
                    // Filtrer les administrateurs seulement
                    this.admins = users.filter(user => user.role === 'ADMIN');
                });
            });
    }










  unlockUser(username: string){
    this.userService.unlockUser(username).subscribe();
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  lockUser(username: string){
    this.userService.lockUser(username).subscribe();
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  makeAdmin(username: string){
    this.userService.makeAdmin(username).subscribe();
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  redirectTo(){
    this.router.navigate(['/register'])
        .then(() => {
          window.location.reload();
        });
  }
}
