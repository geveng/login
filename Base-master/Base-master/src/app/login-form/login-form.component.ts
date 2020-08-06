import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	//tutorials = null;
	tutorials: any;
	username = '';
	password = '';
	validity: boolean;
  constructor(private router: Router, private user:UserService) { }

  ngOnInit(): void {
	  this.retrieveAdminUsers();
  }

  /*loginUser(e){
	  e.preventDefault();
	  console.log(e);
  	  var username = e.target.elements[0].value;
	  var password = e.target.elements[1].value;
	  if (username == 'admin' && password == 'adminpass'){
		  this.user.setUserLoggedIn();
	  	  this.router.navigate(['dashboard']);
	  }
	  else{
	  	  this.user.denyUserLoggedIn();
	  }
  }*/

  retrieveAdminUsers() {
    this.user.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
        },
        error => {
          console.log(error);
		})
}


  searchUser(e) {
	e.preventDefault();
	var username = e.target.elements[0].value;
	var password = e.target.elements[1].value;
	for(var val of this.tutorials){
		if(username == val.username && password == val.password) {
			this.user.setUserLoggedIn();
			this.router.navigate(['dashboard']);
		}
		else{
			this.validity = true;

		}
		/*else if(username != val.username || password != val.password) {
			window.alert("Incorrect Username or Password, Please Try Again");
		}*/
		/*
		if(username != val.username){
			window.alert("Incorrect Username, Please Try Again");
		}
		if(password != val.password){
			window.alert("Incorrect Password, Please Try Again");
		}
		else{
			
		}*/
	}

  }

}
