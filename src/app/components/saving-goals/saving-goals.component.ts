import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'saving-goals',
  templateUrl: './saving-goals.component.html',
  styleUrls: ['./saving-goals.component.css']
})
export class SavingGoalsComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
    
  }

  onClick(){
    this.router.navigate(['/add-goal'])
    //console.log("aaaaaaaaaaaaaaaa");
  }
  goalInfo(){
  
    //console.log("bbbbbbbbbbbbbb");
    this.router.navigate(['/goal-info'])
  }
  Back(){
    this.router.navigate(['/saving-plan']);
    //console.log("aaaaaaaaaa");
  }
}