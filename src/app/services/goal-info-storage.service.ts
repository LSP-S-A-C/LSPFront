import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Info,GoalContainer} from "../models/goal-info.model";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class goalStorageService {
   private currentGoal: Info = null; 
   private localGoalStorage;

    constructor(private router: Router) {
      this.localGoalStorage=localStorage;

    }
      
    //cuando no hay ninguna meta ni informacion de meta
    getCurrentUser(): Info {
        var goal: Info = this.currentGoal;
        return goal;
    };
    loadPlanData(): Info{
      var sessionStr = this.localGoalStorage.getItem('currentGoal');
      return (sessionStr) ? <Info> JSON.parse(sessionStr) : null;
    }
    //lee las metas de ahorro existentes
    getAllGoals() : Observable <GoalContainer>{
      return this.http.get<GoalContainer>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals")
    }
    saveGoals(description: string, money: number):  Observable<Info> {
      return this.http.post<Info>("http://lsp-ahorros-api.herokuapp.com/api/v1/savesgoals",{description:description,money:money })
    }
}

  
