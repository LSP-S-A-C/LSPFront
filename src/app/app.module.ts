import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SavingPlanComponent } from './components/saving-plan/saving-plan.component';
// services
import { AuthService } from './services/auth.service'
import { StorageService} from './services/storage.service'
import {SavingPlanService} from './services/saving-plan.service'

import { AuthorizationGuard } from './guards/AuthorizationGuard';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { LoginPopUpComponent } from './components/login-pop-up/login-pop-up.component';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SavingPlanComponent,
    LoginPopUpComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService, StorageService, SavingPlanService, 
    AuthorizationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
