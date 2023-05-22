import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import {Vehicule} from '../models/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient, private userService: UserService) { }


  private BASE_URL = 'http://localhost:8000/SpringMVC/api/vehicule/GetAllVehicules';
  private BASE_URL_DELETE = 'http://localhost:8000/SpringMVC/api/vehicule/deleteRentalOffer';
  private BASE_URL_AJOUT = 'http://localhost:8000/SpringMVC/api/vehicule/addVehicule';
  private BASE_URL_UPDATE = 'http://localhost:8000/SpringMVC/api/vehicule/update-RentalOffer';
  private BASE_URL_GETBYID = 'http://localhost:8000/SpringMVC/api/vehicule';
  private BASE_URL_AVAILABLE_OFFERS = 'http://localhost:8000/SpringMVC/api/vehicule/GetAvailableVehicules/';
  private BASE_URL_TRI_DES = 'http://localhost:8000/SpringMVC/api/vehicule/triDesc';
  private BASE_URL_TRI_ASC = 'http://localhost:8000/SpringMVC/api/vehicule/tri';


  getAllVehicules(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }
  TriOffersDesc(): Observable<any> {
    return this.http.get(`${this.BASE_URL_TRI_DES}`);
  }
  TriOffersAsc(): Observable<any> {
    return this.http.get(`${this.BASE_URL_TRI_ASC}`);
  }


  deleteVehicule(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL_DELETE}/${id}`, { responseType: 'text' });

  }

  // addVehicule(vehicule: Vehicule): Observable<any> {
  //   const authToken = this.userService.getAuthToken();
  //   const headers = {
  //     Authorization: `Bearer ${authToken}`,
  //     'Content-Type': 'application/json'
  //   };
  //   const options = { headers: headers };
  //   return this.http.post<Vehicule>(`${this.BASE_URL_AJOUT}`, vehicule, options);
  // }

  getVehicule(id :any){
    console.log('gg' , id)
    return this.http.get('http://localhost:8000/api/vehicule/' + id);
  }

  calculateRevenueForUser(id :any){
    console.log('gg' , id)
    return this.http.get(' http://localhost:8000/api/reservation/revenue/'+id)
  }
  getAvailableOffers(date1 :any,date2:any){
    return this.http.get(this.BASE_URL_AVAILABLE_OFFERS +date1+"/"+date2);
  }

  updateVehicule(data:any){
    return this.http.put('http://localhost:8000/api/vehicule/updateVehicule' , data);
  }

  getDisponible(id : any){
    return this.http.get('http://localhost:8000/api/vehicule/Disponibilite/' + id);
  }
}
