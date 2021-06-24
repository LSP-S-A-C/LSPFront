import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { StorageService} from './../../services/storage.service';
import {SavingPlanContainer, SavingPlans} from 'src/app/models/saving-plan';
import { Router } from '@angular/router';
import {SavingPlanService} from './../../services/saving-plan.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Info} from 'src/app/models/goal-info.model'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showAddTransaction: boolean = false;
  user: User
  savingPlans: SavingPlans[]
  public subForm: FormGroup
  error: string = ""
  public msg: string = null;
  constructor(private storageService: StorageService, private formBuilder: FormBuilder, private router: Router, private savingPlanService: SavingPlanService) { }

  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
    console.log(this.user);
    this.subForm = this.formBuilder.group({
      currency: ['', Validators.required],
      currentMoney: ['', Validators.required],
      currentSaves: ['', Validators.required],
      savesPercent: ['', Validators.required]
    })
  }
  
  onClick(){
    this.showAddTransaction = !this.showAddTransaction;
    console.log(this.showAddTransaction);
  }

  onSubmit(): void {
    this.error = null;
    this.msg = null;
    
    if(this.subForm.valid){
      let currency: string = this.subForm.value.currency;
      let currentMoney: number = this.subForm.value.currentMoney;
      let currentSaves: number = this.subForm.value.currentSaves;
      let savesPercent: number = this.subForm.value.savesPercent;
      let userId: number = this.user.id;
      let savesgoals: [];
      
      console.log(currency);
      console.log(currentMoney);
      console.log(currentSaves);
      console.log(savesPercent);
      console.log(userId);
      console.log(savesgoals);

      this.savingPlanService.saves(currency, currentMoney, currentSaves, savesPercent, userId, savesgoals).subscribe(
        data => {
          this.savingPlans=data.body
          console.log(this.savingPlans)
        },
        error => {
          this.error = error.error.message
        }
      )
    }else{
      this.error="Debe completar todos los datos"
    }
  }
  logout(){
    this.storageService.logout();
  }
  openSavingPlan() {
    this.router.navigate(['/saving-plan']);
  }
  openAddTransaction() {
    this.router.navigate(['/add-transaction']);
  }
  openDashboard() {
    this.router.navigate(['/dashboard']);
  }
  openAT() {
    this.router.navigate(['/add-transaction']);
  }
}
