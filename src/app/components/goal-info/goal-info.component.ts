import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'goal-info',
  templateUrl: './goal-info.component.html',
  styleUrls: ['./goal-info.component.css']
})
export class GoalInfoComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  Back(){
    this.router.navigate(['/saving-goals']);
    //console.log("aaaaaaaaaa");
  }
}