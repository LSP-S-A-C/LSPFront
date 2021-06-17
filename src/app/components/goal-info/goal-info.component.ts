import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/models/goal-info.model';

@Component({
  selector: 'goal-info',
  templateUrl: './goal-info.component.html',
  styleUrls: ['./goal-info.component.css']
})
export class GoalInfoComponent implements OnInit {

  goal:Info
  goalContainer:Info[]
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  Back(){
    this.router.navigate(['/saving-goals']);
    //console.log("aaaaaaaaaa");
  }
  getGoal():any{
    return this.goal;
  }
}