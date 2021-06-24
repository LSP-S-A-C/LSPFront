import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CashFlow, Category, CashFlowContainer, SavingSheets, SavingSheetsContainer } from 'src/app/models/finanzas';
import { SessionContainer } from 'src/app/models/session.model';
import { SavingSheetsService } from '../../services/saving-sheets.service';
import { CashflowService } from '../../services/cashflow.service';
import { CategoryService } from '../../services/category.service';
import { StorageService} from '../../services/storage.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  public SheetsForm: FormGroup;
  public CategoryForm: FormGroup;
  public CashFlowForm: FormGroup;
  public submitted: Boolean = false;
  cashflow: CashFlow[];
  savingSheet: SavingSheets[];
  categoriess: Category[];
  error: string = "";
  public msg: string = null;
  savingSheets: SavingSheets = new SavingSheets(1,null,null,null,null,null,null,null);
  category: Category = new Category(null,null,null,null,1);

  constructor(private cashflowService: CashflowService,private categoryService: CategoryService,private sheetsService: SavingSheetsService, private formBuilder: FormBuilder, private router: Router, private storageService: StorageService) { }
  
  ngOnInit(): void {
      this.SheetsForm = this.formBuilder.group({
      active: ['', Validators.required],
      idSavingPlan: ['', Validators.required],
      period: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endDate: ['', Validators.required],
      endTime: ['', Validators.required],
    })
    this.CategoryForm = this.formBuilder.group({
      id: ['', Validators.required],
      categoryName: ['', Validators.required],
      priority: ['', Validators.required]
    })
    this.CashFlowForm = this.formBuilder.group({
      id: ['', Validators.required],
      amount: ['', Validators.required],
      cashFlowName: ['', Validators.required],
      color: ['', Validators.required],
      recurrent: ['', Validators.required]
    })
  }
  onSavingSheets(): void {
    this.error = null;
    if (this.SheetsForm.valid){
      let active: boolean = this.SheetsForm.value.active;
      let idSavingPlan: string = this.SheetsForm.value.idSavingPlan;
      let period: number = this.SheetsForm.value.period;
      let sd: Date = this.SheetsForm.value.startDate;
      let ed: Date = this.SheetsForm.value.endDate;
      //startDate = "2020-06-12T19:02:16.985Z";
      //endDate = "2021-06-12T19:02:16.985Z";
      let startTime: Time = this.SheetsForm.value.startTime;
      let endTime: Time = this.SheetsForm.value.endTime;
      let savingSheetsName: string = this.SheetsForm.value.savingSheetsName;
      let categories: [];
      console.log(sd);
      console.log(ed);
      console.log(startTime);
      console.log(endTime);
      let startDate: string = sd.toString() + "T" + startTime.toString() + ":16.985Z";
      let endDate: string = ed.toString() + "T" + endTime.toString() + ":16.985Z";
      console.log(startDate);
      console.log(endDate);
      console.log(active);
      console.log(period);

      this.sheetsService.create(active, categories, endDate, idSavingPlan, period, savingSheetsName, startDate).subscribe(
        data => {
          this.savingSheet=data.body;
          console.log(this.savingSheet)
        },
        error => {
          this.error = error.error.message;
        }
      )
    }
    else {
      this.error = "Debe completar los datos"
    }
  
  }
  onCategories(): void {
    this.error = null;
    if (this.CategoryForm.valid){
      let id: number = this.CategoryForm.value.id;
      this.savingSheets.id=id;
      let categoryName: string = this.CategoryForm.value.categoryName;
      let priority: number = this.CategoryForm.value.priority;
      let cashFlows: [];

      this.categoryService.create(cashFlows, categoryName, priority, this.savingSheets).subscribe(
        data => {
          this.categoriess=data.body;
          console.log(this.categoriess)
        },
        error => {
          this.error = error.error.message;
        }
      )
    }
    else {
      this.error = "Debe completar los datos"
    }
  
  }
  onCashFlows(): void {
    this.error = null;
    if (this.CashFlowForm.valid){
      let id: number = this.CashFlowForm.value.id;
      let amount: number = this.CashFlowForm.value.amount;
      let cashFlowName: string = this.CashFlowForm.value.cashFlowName;
      let color: string = this.CashFlowForm.value.color;
      let recurrent: boolean = this.CashFlowForm.value.recurrent;
      this.category.id = id;

      this.cashflowService.create(amount, cashFlowName, this.category, color, recurrent).subscribe(
        data => {
          this.cashflow=data.body;
          console.log(this.cashflow)
        },
        error => {
          this.error = error.error.message;
        }
      )
    }
    else {
      this.error = "Debe completar los datos"
    }
  
  }

}