import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SavingPlanContainer} from "../models/saving-plan";
import {SessionContainer  }from "../models/session.model"
@Injectable({
  providedIn: 'root'
})
export class SavingPlanService {

  private basePath: string = "savingsplans"
  apiEndPoint: string="";
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.backend_url;
  }
   findAll(): Observable<SavingPlanContainer> {
     return this.http.get<SavingPlanContainer>(this.apiEndPoint + this.basePath)
   }
  saves(currency: string, currentMoney: number, currentSaves: number, savesPercent: number):  Observable<SessionContainer> {
    return this.http.post<SessionContainer>(this.apiEndPoint + this.basePath + '/saving-plan',{currency: currency, currentMoney: currentMoney, currentSaves: currentSaves, savesPercent: savesPercent})
  }
}
