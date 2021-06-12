import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { StorageService} from '../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {
  user: User
  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
    console.log(this.user);
  }
  logout(){
    this.storageService.logout();
  }
  getUser(): any {
    return this.user;
  }
}
