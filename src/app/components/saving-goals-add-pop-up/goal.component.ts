import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from './../../services/storage.service';

@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css']
  })
  export class GoalComponent implements OnInit {
    constructor(private readonly router: Router,
      private storageService: StorageService) { }
  
    onClick(){
      this.router.navigate(['/saving-goals']);
    }
    ngOnInit(): void {
    }
    getRouter(): any {
      return this.router;
    }
    getUser(): any {
      return this.storageService.getCurrentUser();
    }

  }
  
