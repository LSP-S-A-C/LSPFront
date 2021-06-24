import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavingSheetsContainer, SavingSheets, Category, CashFlow, CashFlowContainer} from "../models/finanzas";

@Injectable({
  providedIn: 'root'
})
export class CashflowService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<CashFlowContainer> {
    return this.http.get<CashFlowContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/cashFlow")
  }
 create(amount: number, cashFlowName: string, category: Category, color: string, recurrent: boolean):  Observable<CashFlowContainer> {
   return this.http.post<CashFlowContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/cashFlow",{amount: amount, cashFlowName: cashFlowName,
   category: category, color: color, recurrent: recurrent})
 }
}
