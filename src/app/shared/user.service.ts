import { Injectable } from '@angular/core';
import {RequestBaseService} from './request-base.service';
import {AuthenticationService} from './authentication.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';

const API_URL = `${environment.BASE_URL}/api/user/`;

@Injectable({
  providedIn: 'root'
})
export class UserService extends  RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  editProfil(user: User): Observable<any> {
    return this.http.put(API_URL + 'update', user, {headers: this.getHeaders});
  }

  getUser(userId: number): Observable<any> {
    const userUrl = `http://localhost:8087/SpringMVC/api/user/${userId}`;
    return this.http.get(userUrl, {headers: this.getHeaders});
  }

  getAllUser(): Observable<any> {
    return this.http.get(API_URL + 'all', {headers: this.getHeaders});
  }
  getUserProfilPicture(): Observable<any> {
    return this.http.get(API_URL + 'picture', {headers: this.getHeaders, responseType: 'text'});
  }

  getUserProfilPicture2(userId: string): Observable<any> {
    return this.http.get(API_URL + 'picture2', {headers: this.getHeaders, responseType: 'text'});
  }

  getNotifications(): Observable<any> {
    return this.http.get(API_URL + 'notifications', {headers: this.getHeaders});
  }

  markNotificationAsRead(notifId: number){
    return this.http.put(API_URL + 'notification/read', notifId, {headers: this.getHeaders});
  }

  markNotificationAsUnRead(notifId: number){
    return this.http.put(API_URL + 'notification/unread', notifId, {headers: this.getHeaders});
  }

  unlockUser(username: string){
    return this.http.put('http://localhost:8087/SpringMVC/api/admin/unlock', username, {headers: this.getHeaders});
  }

  lockUser(username: string){
    return this.http.put('http://localhost:8087/SpringMVC/api/admin/lock', username, {headers: this.getHeaders});
  }

  makeAdmin(username: string): Observable<any> {
    const userUrl = `http://localhost:8087/SpringMVC/api/admin/makeAdmin/${username}`;
    return this.http.put(userUrl, null,  {headers: this.getHeaders});
  }

  getAllAdmins(): Observable<any>{
    return this.http.get('http://localhost:8087/SpringMVC/api/admin/admins', {headers: this.getHeaders});
  }
}
