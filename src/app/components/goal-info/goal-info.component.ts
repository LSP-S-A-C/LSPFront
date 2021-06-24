import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/models/goal-info.model';
import User from 'src/app/models/user.model';
import { GoalContainer } from 'src/app/models/goal-info.model';
import { StorageService } from 'src/app/services/storage.service';
import {goalStorageService} from 'src/app/services/goal-info.service.ts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SavingPlanService} from './../../services/saving-plan.service';
@Component({
  selector: 'goal-info',
  templateUrl: './goal-info.component.html',
  styleUrls: ['./goal-info.component.css']
})
export class GoalInfoComponent implements OnInit {
  goal:Info
  goalContainer:Info[]
  goalContainerId:Info[]
  goalUserid: Info[]
  goalID:Info
 
  error:string=""
  public subForm:FormGroup;
  constructor(private router: Router,private storageService:StorageService, private goalStorageService:goalStorageService,private formBuilder: FormBuilder,savingPlanService: SavingPlanService ) { }

  ngOnInit(): void {
    this.subForm=this.formBuilder.group({
      GoalID:['',Validators.required]
    })
    this.goal=this.goalStorageService.getCurrentGoal();
    this.goalStorageService.findAll().subscribe(
      data=>{
        this.goalContainer=data.body
        console.log(this.goalContainer)
      },
      error=>{
        this.error=error.error.message
      }
    )
   
    /*this.goalStorageService.findbyuserID(this.savingplantry.getCurrentPlan().id).subscribe(
      data=>{
        this.goalContainerId=data.body
        console.log(this.goalContainerId)
      },
      error=>{
        this.error=error.error.message
      }
    )*/
  }
  onSubmit(){
    this.error=null;
    if(this.subForm.valid){
      let GoalID:number=this.subForm.value.GoalID;
      this.goalID=this.goalUserid[GoalID];
      console.log(this.goalID);
    }
    else{
      this.error="ERROR";
    } 
  }

  Back(){
    this.router.navigate(['/saving-goals']);
    //console.log("aaaaaaaaaa");
  }
  getGoal():any{
    return this.goal;
  }
  logout() {
    this.storageService.logout();
  }
 
  
}