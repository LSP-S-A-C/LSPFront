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
  actualize: boolean = false;
  buttonstr: string = "SUBMIT";
  showAddTransaction: boolean = false;
  user: User
  savingPlans: SavingPlans[]
  savingPlans2: SavingPlans[]
  savingPlansUserid: SavingPlans[]
  savingPlansplanid: SavingPlans
  lastsavingPlansplanid: SavingPlans
  public subForm: FormGroup
  error: string = ""
  public msg: string = null;
  cs: number
  id: number;
  constructor(private storageService: StorageService, private formBuilder: FormBuilder, private router: Router, private savingPlanService: SavingPlanService) { }

  ngOnInit(): void {
    this.savingPlanService.findbyuserID(this.storageService.getCurrentUser().id).subscribe(
      data => {
        this.savingPlansUserid = data.body
        console.log("111")
        console.log(this.savingPlansUserid)
        console.log("111")
        this.savingPlansplanid=this.savingPlansUserid[0];
        this.lastsavingPlansplanid=this.savingPlansUserid[this.savingPlansUserid.length-1];
        this.cs=this.lastsavingPlansplanid.currentSaves;
      },
      error => {
        this.error = error.error.message
      }
    )


    this.user = this.storageService.getCurrentUser();
    console.log("222")
    console.log(this.user);
    console.log("222")
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

  clickGuardar(){
    this.onActualizar();
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
          this.savingPlans2=data.body
          console.log("aaa")
          console.log(this.savingPlans2)
          console.log("aaa")
        },
        error => {
          this.error = error.error.message
        }
      )
    }else{
      this.error="Debe completar todos los datos"
    }
  }

  onActualizar(){
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

      this.savingPlanService.findbyuserID(this.storageService.getCurrentUser().id).subscribe(
        data => {
          this.savingPlansUserid = data.body
          console.log("bbb")
          console.log(this.savingPlansUserid)
          console.log("bbb")
          this.savingPlansplanid=this.savingPlansUserid[0];
          this.cs=this.savingPlansplanid.currentSaves;
          console.log("ccc")
          console.log(this.savingPlansplanid)
          console.log("ccc")
          console.log("ddd")
          console.log(this.savingPlansplanid.id)
          this.id = this.savingPlansplanid.id
          console.log("ddd")
          this.lastsavingPlansplanid=this.savingPlansUserid[this.savingPlansUserid.length-1];
          this.cs=this.lastsavingPlansplanid.currentSaves;
        },
        error => {
          this.error = error.error.message
        }
      )

      this.savingPlanService.actualizar(this.id,currency, currentMoney, currentSaves, savesPercent, savesgoals, userId).subscribe(
        data => {
          this.savingPlans=data.body
          console.log("eee")
          console.log(this.savingPlans)
          console.log("eee")
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
