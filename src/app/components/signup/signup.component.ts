import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = new FormControl('');
  constructor(private readonly router: Router) { }
  onClick(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
