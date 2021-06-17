import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalContainer, Info} from "../models/goal-info.model";
import {SessionContainer  }from "../models/session.model"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class goalStorageService {
  private localGoal
  private currentGoal: Info = null;
  apiEndPoint: string="";
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.backend_url;
    this.localGoal = localStorage;
    this.currentGoal = this.loadGoalData();
    
  }
   findAll(): Observable<GoalContainer> {
     return this.http.get<GoalContainer>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals")
   }
  saves(description: string, money: number, id: number):  Observable<GoalContainer> {
    return this.http.post<GoalContainer>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals",{description:description, money: money,id:id})
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
  
