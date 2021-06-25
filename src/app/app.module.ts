import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
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
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import{SavingGoalsAddComponent} from './components/saving-goals-add/saving-goals-add.component';
import { GoalInfoComponent } from './components/goal-info/goal-info.component';
import { GoalInfoTwoComponent } from './components/goal-info-two/goal-info-two.component';
import { GoalInfoThreeComponent } from './components/goal-info-three/goal-info-three.component';
import { GoalInfoFourComponent } from './components/goal-info-four/goal-info-four.component';
import { GoalInfoFiveComponent } from './components/goal-info-five/goal-info-five.component';

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
    AddTransactionComponent,
    SavingGoalsAddComponent,
    GoalInfoComponent,
    GoalInfoTwoComponent,
    GoalInfoThreeComponent,
    GoalInfoFourComponent,
    GoalInfoFiveComponent,

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
