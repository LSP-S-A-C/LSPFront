import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoalContainer, Info} from "../models/goal-info.model";
import { SavingPlans } from '../models/saving-plan';
import {SessionContainer}from "../models/session.model"

@Injectable({
  providedIn: 'root'
})
export class goalStorageService {
  private localGoal
  private currentGoal: Info = null;
  apiEndPoint: string="";
  savingplan:SavingPlans;
  
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.backend_url;
    this.localGoal = localStorage;
    this.currentGoal = this.loadGoalData();

  }
   findAll(): Observable<GoalContainer> {
     return this.http.get<GoalContainer>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals")
   }
  saves(description: string, amountGoal: number, pathImage:string,savingplan:SavingPlans):  Observable<GoalContainer> {
    return this.http.post<GoalContainer>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals",{amountGoal: amountGoal, pathImage:pathImage, description:description, savingplan:savingplan})
  } 
  findbyID(id: number): Observable<GoalContainer> {
    return this.http.get<GoalContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals"+ id.toString())
  }

  getCurrentGoal(): Info {
    var goal: Info = this.currentGoal;
    return goal;
  };
  loadGoalData(): Info{
    var sessionStr = this.localGoal.getItem('currentGoal');
    return (sessionStr) ? <Info> JSON.parse(sessionStr) : null;
  }
}