import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CashFlow, Category, CashFlowContainer } from 'src/app/models/finanzas';
import { SessionContainer } from 'src/app/models/session.model';
import { CashflowService } from '../../services/cashflow.service';
import { StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  public subForm: FormGroup;
  public submitted: Boolean = false;
  cashflow: CashFlow[];
  error: string = "";
  public msg: string = null;

  constructor(private cashflowService: CashflowService, private formBuilder: FormBuilder, private router: Router, private storageService: StorageService) { }
  
  ngOnInit(): void {
      this.subForm = this.formBuilder.group({
      amount: ['', Validators.required],
      cashFlowName: ['', Validators.required],
      color: ['', Validators.required],
      recurrent: ['', Validators.required]
    })
  }
  onSubmit(): void {
    this.error = null;
    if (this.subForm.valid){
      let amount: number = this.subForm.value.amount;
      let cashFlowName: string = this.subForm.value.cashFlowName;
      let color: string = this.subForm.value.cashFlowName;
      let recurrent: boolean = this.subForm.value.cashFlowName;
      let category: [];

      this.cashflowService.create(amount, cashFlowName, category, color, recurrent).subscribe(
        data => {
          //this.cashflow=data.body;
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