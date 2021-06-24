import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SavingPlanContainer, SavingPlans} from "../models/saving-plan";
import { Info} from "../models/goal-info.model";
import {SessionContainer  }from "../models/session.model"
@Injectable({
  providedIn: 'root'
})
export class SavingPlanService {
  private localSavingPlan
  private basePath: string = "savingsplans"
  private currentPlan: SavingPlans = null;
  apiEndPoint: string="";
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.backend_url;
    this.localSavingPlan = localStorage;
    this.currentPlan = this.loadPlanData();
    
  }
   findAll(): Observable<SavingPlanContainer> {
     return this.http.get<SavingPlanContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan")
   }
  saves(currency: string, currentMoney: number, currentSaves: number, savesPercent: number, userId: number, savesgoals: Info[]):  Observable<SavingPlanContainer> {
    return this.http.post<SavingPlanContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan",{currency: currency, currentMoney: currentMoney,
     currentSaves: currentSaves, savesPercent: savesPercent, userId: userId, savesgoals: savesgoals})
  } 
  findbyuserID(id: number): Observable<SavingPlanContainer> {
    return this.http.get<SavingPlanContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan/user/"+ id.toString())
  }
  findbyplanID(id: number): Observable<SavingPlanContainer> {
    return this.http.get<SavingPlanContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan/"+ id.toString())
  }

  getCurrentPlan(): SavingPlans {
    var plan: SavingPlans = this.currentPlan;
    return plan;
  };
  /*getCurrentPlan(id:number): SavingPlans {
    return this.findbyID(id);
  };*/
  loadPlanData(): SavingPlans{
    var sessionStr = this.localSavingPlan.getItem('currentPlan');
    return (sessionStr) ? <SavingPlans> JSON.parse(sessionStr) : null;
  }
}