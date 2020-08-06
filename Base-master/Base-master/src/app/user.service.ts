import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private isUserLoggedIn;
  

  constructor(private http:HttpClient) {
  	  this.isUserLoggedIn = false;
	  
  }

  setUserLoggedIn(){
  	  this.isUserLoggedIn = true;
  }

  /*denyUserLoggedIn(){
  	  this.isUserLoggedIn = false;
	  document.getElementById("error").innerHTML = "Username or Password Incorrect";
	  //window.alert("error");
  }*/

  logout(){
  	  this.isUserLoggedIn = false;
  }

  getUserLoggedIn(){
  	  return this.isUserLoggedIn;
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(username) {
    return this.http.get(`${baseUrl}/${username}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(username, data) {
    return this.http.put(`${baseUrl}/${username}`, data);
  }

  delete(username) {
    return this.http.delete(`${baseUrl}/${username}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(username, password) {
    return this.http.get(`${baseUrl}?username=${username}?password=${password}`);
  }


}


  


