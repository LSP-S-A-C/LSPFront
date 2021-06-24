import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavingSheetsContainer, SavingSheets, Category, CashFlow} from "../models/finanzas";

@Injectable({
  providedIn: 'root'
})
export class CashflowService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<CashFlow> {
    return this.http.get<CashFlow>("https://lsp-finanzas-api.herokuapp.com/api/v1/cashFlow")
  }
 create(amount: number, cashFlowName: string, category: [], color: string, recurrent: boolean):  Observable<CashFlow> {
   return this.http.post<CashFlow>("https://lsp-finanzas-api.herokuapp.com/api/v1/cashFlow",{amount: amount, cashFlowName: cashFlowName,
   category: category, color: color, recurrent: recurrent})
 }
}
