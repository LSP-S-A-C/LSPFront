import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import {SessionContainer  }from "../models/session.model"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basePath: string = "users"
  apiEndPoint: string = "";
  constructor(private http: HttpClient) { 
    this.apiEndPoint = environment.backend_url;      
  }
 
  login(email: string, password: string): Observable<SessionContainer> {
    return this.http.post<SessionContainer>(this.apiEndPoint + this.basePath + '/login', {email: email, password: password})
  }

  create(email: string, employmentStatus: string, name: string, password: string, phone: string): Observable<SessionContainer> {
    return this.http.post<SessionContainer>(this.apiEndPoint + this.basePath + '/signup', {email: email, employmentStatus: employmentStatus, name: name, password: password, phone: phone})
  }

}
