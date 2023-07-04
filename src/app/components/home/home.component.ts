import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatCalendar } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appointmentForm!: FormGroup;
  selectedDate: Date = new Date();
  doctors: string[] = ['Dr. John', 'Dr. Jane', 'Dr. Smith'];
  @ViewChild('picker') picker!: MatCalendar<Date>;
  httpOptions:any;

  //Register variables
  rdoctor:String='';
  rdetails:String='';
  rdate:any='';

  constructor(private fb: FormBuilder, private http: HttpClient,private log:LoginService) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      doctor: ['', Validators.required],
      details: ''
      // Add other form controls as needed
    });
  }

  register(): void {
    let obj = {
      date: this.rdate,
      doctor: this.rdoctor,
      details: this.rdetails
    };
  
    this.log.register(obj).subscribe({
      next: (result: any) => {
        if (result.success == false) {
          alert("User already exists");
        } else {
          alert("User successfully registered");
        }
      },
      error: () => {
        alert("There is a problem. Please try again later.");
      }
    });

  }
 
  

  closeDatepicker(picker: MatDatepicker<any>) {
    picker.close();
  }

  onDateSelected(event: any) {
    // Handle date selection
  }
}


 // submitForm(obj:any):Observable<object>{
  //   if (this.appointmentForm.valid) {
  //     const formData = this.appointmentForm.value;
  //     // Process the form data, e.g., submit it to a server
  //     console.log(formData);
  //   }
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //       })
  //   }
  //   return this.http.post("http://localhost:3000/submitForm",obj,this.httpOptions).subscribe(
  //              response => {
  //                // Handle the response
  //                console.log(response);
  //              },
  //              error => {
  //                // Handle the error
  //                console.error(error);
  //              }
  //           );
  // }
 // submitForm() {
  //   if (this.appointmentForm.valid) {
  //     const formData = this.appointmentForm.value;
  //     // Process the form data, e.g., submit it to a server
  //     console.log(formData);

  //     // Post the form data to a JSON file
  //     this.http.post('assets/response.json', formData)
  //       .subscribe(
  //         response => {
  //           // Handle the response
  //           console.log(response);
  //         },
  //         error => {
  //           // Handle the error
  //           console.error(error);
  //         }
  //       );
  //   } else {
  //     // Handle form validation errors
  //   }
  // }

   // submitForm(obj: any): Observable<object> {
  //   if (this.appointmentForm.valid) {
  //     const formData = this.appointmentForm.value;
  //     // Process the form data, e.g., submit it to a server
  //     console.log(formData);
  
  //     this.httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //       })
  //     };
  
  //     return this.http.post("http://localhost:3000/appointments", obj, this.httpOptions);
  //   } else {
  //     // Handle form validation errors
  //     return throwError("Form is invalid");
  //   }
  // }