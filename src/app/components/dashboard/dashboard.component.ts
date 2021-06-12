import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { StorageService} from './../../services/storage.service';
import {SavingPlan,SavingPlanContainer, SavingPlans} from 'src/app/models/saving-plan';
import { Router } from '@angular/router';
import {SavingPlanService} from './../../services/saving-plan.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User
  savingPlans: SavingPlans
  public subForm: FormGroup
  error: string = ""
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

  onSubmit(): void {
    this.error = null;
    
    if(this.subForm.valid){
      let currency: string = this.subForm.value.currency;
      let currentMoney: number = this.subForm.value.currentMoney;
      let currentSaves: number = this.subForm.value.currentSaves;
      let savesPercent: number = this.subForm.value.savesPercent;


      this.savingPlanService.saves(currency, currentMoney, currentSaves, savesPercent).subscribe(
        data => {
          this.savingPlans = new SavingPlans(currency, savesPercent, currentSaves, savesPercent)
          console.log(this.savingPlans)
        },
        error => {
          this.error = error.error.message
        }
      )
    }
  }
  logout(){
    this.storageService.logout();
  }
  openSavingPlan() {
    this.router.navigate(['/saving-plan']);
  }

}
