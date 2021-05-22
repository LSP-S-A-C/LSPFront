import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionContainer } from 'src/app/models/session.model';

import { AuthService } from './../../services/auth.service';
import { StorageService} from './../../services/storage.service';
@Component({
  selector: 'app-login-pop-up',
  templateUrl: './login-pop-up.component.html',
  styleUrls: ['./login-pop-up.component.css']
})
export class LoginPopUpComponent implements OnInit {
  public error: string = null;
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, 
    private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit(): void{
    this.error = null;
    if (this.loginForm.valid){
      let email: string = this.loginForm.value.email;
      let password: string = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(
        data => this.correctLogin(data),
        error => {
          this.error = error.error.message;
        }
      )
    }
    else {
      this.error = "Debe ingresar sus credenciales"
    }
  }
  private correctLogin(data: SessionContainer) {
    this.error = null;
    console.log(data);
    if(data.body) {
      this.storageService.setCurrentSession(data.body);
      this.router.navigate(['/dashboard']);
      console.log("hola");
    }
    else{
      this.error = "Error en el login, por favor inténtelo nuevamente";
    }
  }

}
