import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from './../../services/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css']
    
  })
  export class GoalComponent implements OnInit {
    constructor(){}

    ngOnInit(): void {
    }


  }

  
