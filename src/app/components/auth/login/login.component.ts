import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private loginService: LoginService,
    private route: Router) {
    
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }


  submit(){
    console.log(this.form.value);
    if(this.form.valid)
    alert("Login Successful");
     this.loginService.login(this.form.value).subscribe((response:any)=>{
        sessionStorage.setItem("username",response.user.username);
        sessionStorage.setItem("usertype",response.user.type);
        sessionStorage.setItem("token",response.accessToken);
        sessionStorage.setItem("email",response.user.email);
        this.loginService.loggedUser.userName = response.user.username;
        this.loginService.loggedUser.userType = response.user.type;
        this.loginService.loggedUser.AccessToke =response.accessToken;
        alert("Login Successful2");
        if(response.user.type=="admin")
        { this.route.navigate(['admin-dashboard']);}
        else
        this.route.navigate(['homepage']);
      }
     );
  }

}
