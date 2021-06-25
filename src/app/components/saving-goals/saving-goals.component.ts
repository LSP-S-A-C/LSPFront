import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'saving-goals',
  templateUrl: './saving-goals.component.html',
  styleUrls: ['./saving-goals.component.css']
})
export class SavingGoalsComponent implements OnInit {
  prueba:number;

  constructor(private router: Router ) { }

  ngOnInit(): void {
    
  }

  onClick(){
    this.router.navigate(['/add-goal'])
    //console.log("aaaaaaaaaaaaaaaa");
  }
  goalInfo1(){
  
    
    this.router.navigate(['/goal-info1'])
  }
  goalInfo2(){
  
  
    this.router.navigate(['/goal-info2'])
  } 
  goalInfo3(){
  
   
    this.router.navigate(['/goal-info3'])
  }
  goalInfo4(){
  
   
    this.router.navigate(['/goal-info4'])
  }
  goalInfo5(){
  

    this.router.navigate(['/goal-info5'])
  }

  Back(){
    this.router.navigate(['/saving-plan']);
    //console.log("aaaaaaaaaa");
  }
}