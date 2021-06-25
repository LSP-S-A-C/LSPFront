import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SavingPlanComponent } from './components/saving-plan/saving-plan.component';
import { SavingGoalsComponent } from './components/saving-goals/saving-goals.component';
import { SignupComponent } from './components/signup/signup.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { AddTransactionComponent} from './components/add-transaction/add-transaction.component';
import { AuthorizationGuard } from './guards/AuthorizationGuard';
import{SavingGoalsAddComponent} from './components/saving-goals-add/saving-goals-add.component';
import{GoalInfoComponent} from './components/goal-info/goal-info.component';
import {GoalInfoTwoComponent} from './components/goal-info-two/goal-info-two.component';
import { GoalInfoThreeComponent } from './components/goal-info-three/goal-info-three.component';
import { GoalInfoFourComponent } from './components/goal-info-four/goal-info-four.component';
import { GoalInfoFiveComponent } from './components/goal-info-five/goal-info-five.component';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard]},
  { path: 'add-transaction', component:AddTransactionComponent,canActivate:[AuthorizationGuard] },
  { path: 'saving-plan', component: SavingPlanComponent, canActivate: [AuthorizationGuard]},
  { path: 'saving-goals', component: SavingGoalsComponent, canActivate: [AuthorizationGuard]},
  { path: 'mis-datos', component: MisDatosComponent, canActivate: [AuthorizationGuard]},
  { path:'add-goal', component:SavingGoalsAddComponent,canActivate:[AuthorizationGuard] },
  { path:'goal-info1', component:GoalInfoComponent,canActivate:[AuthorizationGuard] },
  { path:'goal-info2', component:GoalInfoTwoComponent,canActivate:[AuthorizationGuard] },
  { path:'goal-info3', component:GoalInfoThreeComponent,canActivate:[AuthorizationGuard] },
  { path:'goal-info4', component:GoalInfoFourComponent,canActivate:[AuthorizationGuard] },
  { path:'goal-info5', component:GoalInfoFiveComponent,canActivate:[AuthorizationGuard] },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
