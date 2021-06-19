import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavingSheetsContainer, SavingSheets, Category, CashFlow} from "../models/finanzas";

@Injectable({
  providedIn: 'root'
})
export class SavingSheetsService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<SavingSheetsContainer> {
    return this.http.get<SavingSheetsContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/savingSheets")
  }
 create(active: boolean, categories: Category[], endDate: "2021-06-12T19:02:16.985Z", idSavingPlan: string, period: number, savingSheetsName: string, startDate: "2020-06-12T19:02:16.985Z"):  Observable<SavingSheetsContainer> {
   return this.http.post<SavingSheetsContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/savingSheets",{active: active, categories: categories,
   endDate: endDate, idSavingPlan: idSavingPlan, period: period, savingSheetsName: savingSheetsName, startDate: startDate})
 }
}
