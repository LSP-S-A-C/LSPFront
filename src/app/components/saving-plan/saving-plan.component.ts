import { Component, OnInit } from '@angular/core';

import User from 'src/app/models/user.model';
import { SavingPlans } from 'src/app/models/saving-plan';
import {SavingPlanContainer} from 'src/app/models/saving-plan';
import {StorageService} from './../../services/storage.service';
import {SavingPlanService} from './../../services/saving-plan.service';
import { Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-saving-plan',
  templateUrl: './saving-plan.component.html',
  styleUrls: ['./saving-plan.component.css']
})
export class SavingPlanComponent implements OnInit {
  plan: SavingPlans
  savingPlans: SavingPlans[]
  savingPlansid: SavingPlans[]
  savingPlansUserid: SavingPlans[]
  savingPlansplanid: SavingPlans
  error: string = ""
  public subForm: FormGroup;
  cant_saving_plans: number;

  constructor(private storageService: StorageService,
    private router: Router,private formBuilder: FormBuilder,private savingPlanService: SavingPlanService) { }

  ngOnInit() {
    this.subForm = this.formBuilder.group({
      PlanID: ['', Validators.required]
    })

    this.plan = this.savingPlanService.getCurrentPlan();
   
    this.savingPlanService.findAll().subscribe(
      data => {
        this.savingPlans = data.body
        console.log("222")
        console.log(this.savingPlans)
        console.log("333")
        this.next()
      },
      error => {
        this.error = error.error.message
      }
    )

  }

  next(){
    
    this.savingPlanService.findbyuserID(this.storageService.getCurrentUser().id).subscribe(
      data => {
        this.savingPlansUserid = data.body
        console.log(this.savingPlansUserid)
        this.savingPlansplanid=this.savingPlansUserid[this.savingPlansUserid.length-1];
        console.log("ccc")
        console.log(this.savingPlansplanid)
        console.log("ddd")
      },
      error => {
        this.error = error.error.message
      }
    )
  }
  
  getPlan(): any {
    return this.plan;
  }

  logout() {
    this.storageService.logout();
  }

  openSavingGoals(){
    this.router.navigate(['/saving-goals']);
  }

  Back(){
    this.router.navigate(['/dashboard']);
  }

}