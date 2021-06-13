import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from './../../services/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvokeFunctionExpr } from '@angular/compiler';
import{Info} from 'src/app/models/goal-info.model';
import{goalStorageService} from "src/app/services/goal-info-storage.service";
import { GoalContainer } from 'src/app/models/goal-info.model';

@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css']

  })
  export class GoalComponent implements OnInit {
    goal:GoalContainer
    goalContainer:GoalContainer[]
    error: string =""
    constructor(private router:Router,private GoalStorageService:goalStorageService)
    {}

    ngOnInit(): void {
      this.goal=this.GoalStorageService.getCurrentUser();

      this.GoalStorageService.getAllGoals();

    }
    getGoal():any{
      return this.goal;
    }


  }

  
