import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = {
    fullName:'',
    email:'',
    username:'',
    password:'',
  };
  submitted = false;
  
  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  registerUser() {
    const data = {
      fullName: this.register.fullName,
      email: this.register.email,
      username: this.register.username,
      password: this.register.password,
    };
    console.log(this.register.fullName);
    if(this.register.fullName == ''){
      window.alert("Please Enter Full Name");
      return;
    }
    if(this.register.email == ''){
      window.alert("Please Enter Email");
      return;
    }
    if(this.register.username == ''){
      window.alert("Please Enter Username");
      return;
    }
    if(this.register.password == ''){
      window.alert("Please Enter Password");
      return;
    }
    else{
      this.user.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  }

}
