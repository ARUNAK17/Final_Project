import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LearnmoreComponent } from './components/learnmore/learnmore.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path:"login", loadChildren:() => import('./components/auth/login/login.module').then(m => m.LoginModule)},
  {path:"home",component:HomeComponent},
  {path:"mainpage",component:MainpageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"register", component:RegisterComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"learnmore",component:LearnmoreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
