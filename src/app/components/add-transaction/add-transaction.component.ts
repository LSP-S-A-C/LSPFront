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
      amount: ['', Validators.required],
      cashFlowName: ['', Validators.required],
      color: ['', Validators.required],
      recurrent: ['', Validators.required]
    })
    this.CategoryForm = this.formBuilder.group({
      amount: ['', Validators.required],
      cashFlowName: ['', Validators.required],
      color: ['', Validators.required],
      recurrent: ['', Validators.required]
    })
    this.CashFlowForm = this.formBuilder.group({
      amount: ['', Validators.required],
      cashFlowName: ['', Validators.required],
      color: ['', Validators.required],
      recurrent: ['', Validators.required]
    })
  }
  onSavingSheets(): void {
    this.error = null;
    if (this.SheetsForm.valid){
      let id: number = 1;
      let idSavingPlan: string = this.SheetsForm.value.idSavingPlan;
      let period: number = this.SheetsForm.value.period;
      let startDate: string = this.SheetsForm.value.startDate;
      let endDate: string = this.SheetsForm.value.endDate;
      startDate = "2020-06-12T19:02:16.985Z";
      endDate = "2021-06-12T19:02:16.985Z";
      let savingSheetsName: string = this.SheetsForm.value.savingSheetsName;
      let active: boolean = true;
      let categories: [];

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
      let color: string = this.CashFlowForm.value.cashFlowName;
      let recurrent: boolean = this.CashFlowForm.value.cashFlowName;
      this.category.id = id;

      this.cashflowService.create(amount, cashFlowName, this.category, color, recurrent).subscribe(
        data => {
          this.cashflow=data.body;
          console.log(this.cashflow[0].amount)
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