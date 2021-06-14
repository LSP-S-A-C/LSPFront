import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavingSheetsContainer, SavingSheets, Category, CashFlow} from "../models/finanzas";
import {SessionContainer  }from "../models/session.model"/*
@Injectable({
  providedIn: 'root'
})
/*export class SavingSheetsService {
  apiEndPoint: string="";
  constructor(private http: HttpClient) {    
  }
   findAll(): Observable<SavingSheetsContainer> {
     return this.http.get<SavingSheetsContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan")
   }
  savesheet(currency: string, currentMoney: number, currentSaves: number, savesPercent: number, userId: number, savesgoals: Info[]):  Observable<SavingPlanContainer> {
    return this.http.post<SavingSheetsContainer>("https://lsp-ahorros-api.herokuapp.com/api/v1/savingplan",{currency: currency, currentMoney: currentMoney,
     currentSaves: currentSaves, savesPercent: savesPercent, userId: userId, savesgoals: savesgoals})
  }
}*/