import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import {SavingPlan,SavingPlanContainer} from 'src/app/models/saving-plan';
import {StorageService} from '../../services/storage.service';
import {SavingPlanService} from '../../services/saving-plan.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-saving-goals',
  templateUrl: './saving-goals.component.html',
  styleUrls: ['./saving-goals.component.css']
})
export class SavingGoalsComponent implements OnInit {
  user: User  
  savingPlans: SavingPlan[]
  error: string = ""
  constructor(private storageService: StorageService,
    private router: Router,private savingPlanService: SavingPlanService) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
   
    this.savingPlanService.findAll().subscribe(
      data => {
        this.savingPlans = data.body
        console.log(this.savingPlans)
      },
      error => {
        this.error = error.error.message
      }
    )
  }
  logout() {
    this.storageService.logout();
  }
  onClick(){
    this.router.navigate(['/goal']);
  }

}
/*
{
  "currency": "PEN",
  "currentAmount": 0,
  "expectedSavingsRatio": 0,
  "id": 0,
  "period": 0,
  "picturePath": "string",
  "salary": 0,
  "savingsSheets": null,
  "user": {
    "email": "string",
    "employmentStatus": "UNEMPLOYED",
    "id": 0,
    "name": "string",
    "password": "string",
    "phone": "string",
    "savingsPlans": [
      null
    ]
  }
}
*/