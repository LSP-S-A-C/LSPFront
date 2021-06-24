import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavingSheetsContainer, SavingSheets, Category, CashFlow, CategoriesContainer} from "../models/finanzas";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<CategoriesContainer> {
    return this.http.get<CategoriesContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/category")
  }
 create(cashFlows: CashFlow[], categoryName: string, priority: number, savingSheets: SavingSheets):  Observable<CategoriesContainer> {
   return this.http.post<CategoriesContainer>("https://lsp-finanzas-api.herokuapp.com/api/v1/category",{cashFlows: cashFlows, categoryName: categoryName,
   priority: priority, savingSheets: savingSheets})
 }
}
