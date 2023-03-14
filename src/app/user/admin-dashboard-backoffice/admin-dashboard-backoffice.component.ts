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
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-dashboard-backoffice',
  templateUrl: './admin-dashboard-backoffice.component.html',
  styleUrls: ['./admin-dashboard-backoffice.component.scss'],
})
export class AdminDashboardBackofficeComponent implements OnInit {

  subscribedUsers: Array<User> = [];

  allAdmins: Array<User> = [];

  lineData: any;

  allUsers: Array<User> = [];

  countryList: Array<string> = [];

  countryValues: Array<number> = [];

  colors: Array<string> = [];

  allSubscribedUsers: Array<User> = [];

  customers1: Customer[];

  customers2: Customer[];

  customers3: Customer[];

  selectedCustomers1: Customer[];

  selectedCustomer: Customer;

  representatives: Representative[];

  statuses: any[];

  products: Product[];

  rowGroupMetadata: any;

  activityValues: number[] = [0, 100];

  @ViewChild('dt') table: Table;

  cols: any[];

  items: MenuItem[];

  ordersChart: any;


  revenueChart: any;

  constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService, authenticationService: AuthenticationService,
              private userService: UserService, private customerService: CustomerService, private router: Router) {
    this.breadcrumbService.setItems([
      {label: 'Dashboard', routerLink: ['/']}
    ]);


  }

  ngOnInit() {
    this.userService.getAllAdmins().subscribe(allAdmins => {
      this.allAdmins = allAdmins;
    });


    this.userService.getAllUser().subscribe(users => {
      this.allUsers = users;
    });


    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];

    this.items = [{
      label: 'Shipments',
      items: [
        {label: 'Tracker', icon: 'pi pi-compass'},
        {label: 'Map', icon: 'pi pi-map-marker'},
        {label: 'Manage', icon: 'pi pi-pencil'}
      ]
    }
    ];


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


}
