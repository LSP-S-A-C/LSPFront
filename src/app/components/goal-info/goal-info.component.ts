import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/models/goal-info.model';
import User from 'src/app/models/user.model';
import { GoalContainer } from 'src/app/models/goal-info.model';
import { StorageService } from 'src/app/services/storage.service';
import {goalStorageService} from 'src/app/services/goal-info.service.ts.service';
@Component({
  selector: 'goal-info',
  templateUrl: './goal-info.component.html',
  styleUrls: ['./goal-info.component.css']
})
export class GoalInfoComponent implements OnInit {
  goal:Info
  goalContainer:Info[]
  goalContainerId:Info[]
  error:string=""
  constructor(private router: Router,private storageService:StorageService, private goalStorageService:goalStorageService ) { }

  ngOnInit(): void {
   this.goal=this.goalStorageService.getCurrentGoal();

    this.goalStorageService.findAll().subscribe(
      data =>{
        this.goalContainer=data.body
        console.log(this.goalContainer)
      },
      error=>{
        this.error=error.error.message
      }
    )
    this.goalStorageService.findbyID(this.storageService.getCurrentUser().id).subscribe(
      data=>{
        this.goalContainerId=data.body
        console.log(this.goalContainerId)
      },
      error=>{
        this.error=error.error.message
      }

    )
  }

  Back(){
    this.router.navigate(['/saving-goals']);
    //console.log("aaaaaaaaaa");
  }
  getGoal():any{
    return this.goal;
  }
}