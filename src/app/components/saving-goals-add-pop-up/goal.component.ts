/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { StorageService} from './../../services/storage.service';

import { InvokeFunctionExpr } from '@angular/compiler';

import{goalStorageService} from "src/app/services/goal-info-storage.service";
import { Info } from 'src/app/models/goal-info.model';

@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css']

  })
  export class GoalComponent implements OnInit {
    goal:Info
    goalContainer:Info[]
    //error: string =""
    constructor(private router:Router,private GoalStorageService:goalStorageService,private formBuilder:FormBuilder,private storageService:StorageService)
    {}
    public error:string=null;
    public subForm:FormGroup;
    public submitted:Boolean=false;
    public msg:string=null;


    ngOnInit(): void {
     this.subForm=this.formBuilder.group({
       description: ['',Validators.required],
       money:['',Validators.required]
     })
    }
    onSubmit():void{
      this.msg=null;
      this.error=null;
      if(this.subForm.valid){
        let description:string=this.subForm.value.description;
        let money:number=this.subForm.value.money;
      }
      this.GoalStorageService.saves(description,money,id).subscribe(
        
      )
    }
    


  }*/

  
