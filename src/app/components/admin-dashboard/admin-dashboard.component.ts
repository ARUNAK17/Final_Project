import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';
import { status } from 'src/app/models/login.model';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  

})
export class AdminDashboardComponent implements OnInit {

  appointments!: any[];
  status:status[]=[]

  constructor(private http: HttpClient,private fs:FormService) {}

  ngOnInit(): void {
    this.fs.getappointments().subscribe ({
      next: (data: status[]) => {
        this.status = data.filter(appointment => appointment.status === 'Pending');
      },
      error: (error: any) => {
        this.status = [];
      }
  })
  }

  // getAppointment(): void {
  //   this.http.get<any[]>('http://localhost:3000/appointments')
  //     .subscribe(data => {
  //       this.appointments = data.filter(appointment => appointment.status === 'Pending');
  //     });
  // }

  approveAppointment(appointment: any): void {
    // Update the status to "Approved" here
    appointment.status = 'Approved';

    // Make a PUT request to update the appointment status
    this.http.put(`http://localhost:3000/appointments/${appointment.id}`, appointment)
      .subscribe(() => {
        console.log('Appointment approved successfully');
      });
  }

}
