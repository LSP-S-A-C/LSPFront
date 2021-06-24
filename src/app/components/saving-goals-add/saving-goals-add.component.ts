import {Component,OnInit} from '@angular/core';
import User from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';
import {Info} from 'src/app/models/goal-info.model';
import { Router } from '@angular/router';
import { goalStorageService } from 'src/app/services/goal-info.service.ts.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SavingPlans } from 'src/app/models/saving-plan';
import {SavingPlanService} from './../../services/saving-plan.service';

@Component({
  selector: 'app-saving-goals-add',
  templateUrl: './saving-goals-add.component.html',
  styleUrls: ['./saving-goals-add.component.css']
})
export class SavingGoalsAddComponent implements OnInit {
  user:User
  savingPlansid: SavingPlans[]
  goal:Info[]
  public goalForm: FormGroup
  error:string=""
  public msg:string=null;
  sp:SavingPlans = new SavingPlans(1,null,null,null,null,null);
  constructor(private storageService:StorageService,private formBuilder:FormBuilder,private router:Router,private GoalStorageService:goalStorageService,private savingPlanService: SavingPlanService){}

  ngOnInit():void{
    this.user=this.storageService.getCurrentUser();
    console.log(this.user);
    
    console.log(this.sp)
    this.goalForm=this.formBuilder.group({  
      description:['',Validators.required],
      money:['',Validators.required],
      image:['',Validators.required]
    })
    this.savingPlanService.findbyuserID(1).subscribe(
      data => {
        this.savingPlansid = data.body
        console.log(this.savingPlansid)
      },
      error => {
        this.error = error.error.message
      }
    )
}


onSubmit():void{
  this.error=null;
  this.msg=null;
  if(this.goalForm.valid){
    let description:string=this.goalForm.value.description;
    let money:number=this.goalForm.value.money;
    let image:string=this.goalForm.value.image;

    console.log(description);
    console.log(money);
    console.log(image);
    console.log(this.sp)

 

    this.GoalStorageService.saves(description,money,image,this.sp).subscribe(
      data=>{
        this.goal=data.body
        console.log(this.goal)
        this.router.navigate(['/saving-goals']);
      },
      error=>{
        this.error=error.error.message
      }
      
    )
  }else{
    this.error="Debe completar todos los datos"
  }
  
}
logout(){
  this.storageService.logout();

}
Back(){
  this.router.navigate(['/saving-goals']);
  //console.log("aaaaaaaaaa");
}
}