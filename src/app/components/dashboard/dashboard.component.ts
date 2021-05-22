import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { StorageService} from './../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User
  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
    console.log(this.user);
  }
  logout(){
    this.storageService.logout();
  }
  openSavingPlan() {
    this.router.navigate(['/saving-plan']);
  }

}
