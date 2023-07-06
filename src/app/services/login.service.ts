import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login,LoginDetails } from '../models/login.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  doctor:String='';
  details:String='';
  date:any='';

  loggedUser: LoginDetails = new LoginDetails();
  httpHeaders = new HttpHeaders({'Content-Type':  'application/json'});
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  }
  constructor(private http: HttpClient ) { }


  login(value: Login){
    return this.http.post(`${environment.Base_URL}login`,value,this.httpOptions );
  }

  register(formData: any){
    return this.http.post("http://localhost:4600/users",formData);
  }

}



