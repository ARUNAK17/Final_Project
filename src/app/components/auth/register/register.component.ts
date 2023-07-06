import { Component,OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/register';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterModel:RegisterModel[]=[];
  remail:string='';
  rusername:string='';
  rtype:string='user';
  rpassword:string='';
  rlastname:string='';

  constructor (private ls:LoginService){
  

  }


  register(){
    const formData={
      email:this.remail,
      username:this.rusername,
      type:this.rtype,
      password:this.rpassword,
      lastname:this.rlastname

     };
    this.ls.register(formData).subscribe((res) =>{
     // alert(res);
      alert('User registered successfully!');
      this.resetform();
     });

  }
  resetform(){
    this.remail='';
    this.rusername='';
    this.rtype='user';
    this.rpassword='';
    this.rlastname='';
  

  }

}
