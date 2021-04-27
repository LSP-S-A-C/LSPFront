import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
