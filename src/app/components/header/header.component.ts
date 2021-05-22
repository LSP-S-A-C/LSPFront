import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from './../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly router: Router,
    private storageService: StorageService) { }

  onClick(){
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {
  }
  getRouter(): any {
    return this.router;
  }
  getUser(): any {
    return this.storageService.getCurrentUser();
  }
  logout(){
    this.storageService.logout();
  }
}
