import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatCalendar } from '@angular/material/datepicker';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LearnmoreComponent } from './components/learnmore/learnmore.component';


@NgModule({
  declarations: [	
    AppComponent,
    RegisterComponent,
    HomeComponent,
    MainpageComponent,
    AdminDashboardComponent,
    LearnmoreComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
