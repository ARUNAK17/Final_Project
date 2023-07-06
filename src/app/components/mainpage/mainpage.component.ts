import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  rname: string = '';
  remail: string = '';
  rphone: string = '';
  rmessage: string = '';
  rdate:any='';
  rspecialty:any='';
  rgender:any='';
  rstatus:String='Pending'


  constructor(private http: HttpClient,private formService: FormService) {}

  bookAppointment(): void {
    const formData = {
      name: this.rname,
      email: this.remail,
      phone: this.rphone,
      message: this.rmessage,
      date: this.rdate,
      speciality:this.rspecialty,
      gender:this.rgender,  
      status:this.rstatus

    };

    
     this.formService.saveAppointments(formData).subscribe((res) =>{
      alert('Appointment request submitted successfully!');
      this.resetForm();
     });
  }

  resetForm(): void {
    this.rname = '';
    this.remail = '';
    this.rphone = '';
    this.rmessage = '';
    this.rdate= '';
    this.rspecialty= '';
    this.rgender= '';
  }

}
