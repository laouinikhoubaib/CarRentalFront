import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestBaseService} from './request-base.service';
import {AuthenticationService} from './authentication.service';
import {Complaint} from '../models/complaint';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ComplaintService extends  RequestBaseService{

  private baseUrl = 'http://localhost:8080/api/complaint';

  constructor( http: HttpClient, authenticationService: AuthenticationService) {
    super(authenticationService, http);
  }

  addComplaint(complaint: Complaint, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddComplaint/${userId}`, complaint);
  }

  deleteComplaint(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteComplaint/${id}`, { responseType: 'text' });
  }

  updateComplaint(id: number, complaint: Complaint): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateCompalaint/${id}`, complaint);
  }

  getAllComplaints(): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieveAllComplaints`);
  }

  treatComplaint(id: number, complaint: Complaint, userId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/traiter/${id}?userId=${userId}`, complaint);
  }
}
