import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {RequestBaseService} from './request-base.service';
import {Agence} from '../models/agence';

@Injectable({
  providedIn: 'root'
})

export class AgenceService  extends  RequestBaseService {
  coursesUrl = 'http://localhost:8080/SpringMVC/api/agence/all';

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>(this.coursesUrl);
  }

  getAgence(agenceId: string): Observable<Agence> {
    return this.http.get<Agence>('http://localhost:8080/SpringMVC/api/agence/getAgence/' + agenceId);
  }

  createAgence(agence: Agence) {
    return this.http.post<Agence>('http://localhost:8080/SpringMVC/api/agence/addAgence/', agence, {headers: this.getHeaders});
  }

  deleteAgence(id: string) {
    return this.http.delete('http://localhost:8080/SpringMVC/SpringMVC/api/agence/deleteAgence' + id, {headers: this.getHeaders});
  }

  updateAgence(agenceId: string , c: Agence) {
    return this.http.put<Agence>('http://localhost:8087/SpringMVC/api/agence/updateAgence' + agenceId + '/' , c , {headers: this.getHeaders});

  }

}
