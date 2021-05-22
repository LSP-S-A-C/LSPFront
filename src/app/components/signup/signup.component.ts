import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserSignup } from '../../models/user.model';
import { SessionContainer} from './../../models/session';
import { StorageService } from './../../services/storage.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public showLogin: boolean = false;
  constructor(private readonly router: Router, private authService: AuthService,
    private formBuilder: FormBuilder, private storageService: StorageService) { }

  public error: string = null;
  public subForm: FormGroup;
  public submitted: Boolean = false;
  public msg: string = null;
  onClick(){
    this.showLogin = !this.showLogin;
  }
  ngOnInit(): void {
    
    this.subForm = this.formBuilder.group({
      name: ['', Validators.required],
      pass: ['', Validators.required],
      phone: ['', Validators.required],
      EmploymentStatus: ['', Validators.required],
      email: ['', Validators.required]
    })
    
  }
  onSubmit(): void {
    this.msg = null;
    this.error = null;
    if (this.subForm.valid){
      let name: string = this.subForm.value.name;
      let password: string = this.subForm.value.pass;
      let phone: string = this.subForm.value.phone;
      let EmploymentStatus: string = this.subForm.value.EmploymentStatus;
      let email: string = this.subForm.value.email;
      
      
      this.authService.create(email, EmploymentStatus, name, password, phone).subscribe(
        data => this.correctSignup(data),
        error => {
          this.error = error.error.message;
          
        }
      )
    }
    else {
      this.error = "Debe completar todos los datos";
    }
    
  }

  private correctSignup(data: SessionContainer) {
    this.error = null
    console.log(data);
    if (data.body) {
      this.msg = "cuenta creada con exito, haga click debajo para hacer login"
    } else {
      this.error = "Error en el signup, por favor inténtelo nuevamnete";
    }
  }

}
