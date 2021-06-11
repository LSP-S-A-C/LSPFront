import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SavingPlanComponent } from './components/saving-plan/saving-plan.component';
import { SavingGoalsComponent } from './components/saving-goals/saving-goals.component';
import { SignupComponent } from './components/signup/signup.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { AuthorizationGuard } from './guards/AuthorizationGuard';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard]},
  { path: 'saving-plan', component: SavingPlanComponent, canActivate: [AuthorizationGuard]},
  { path: 'saving-goals', component: SavingGoalsComponent, canActivate: [AuthorizationGuard]},
  { path: 'mis-datos', component: MisDatosComponent, canActivate: [AuthorizationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
