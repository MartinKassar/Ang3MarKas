//This service class sets localstorage and checks log in validation.

import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _url: string = "https://jsonplaceholder.typicode.com/users"; //My userlist object

  arrayEmail: string[] = [] //Array of emails containing correct emails
  arrayPassword: string[] = [] // Array of password containing correct passwords


  // Correct user to log in.
  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(private http:HttpClient) { }



  // this method clears out local storage
  logOut(): void {
    localStorage.clear();
    this.arrayEmail = []
    this.arrayPassword = []

  }

  // this method returns localstorage
  checkIfLoggedIn(): any {
    return localStorage.getItem("user")
  }

  // this method checks validation of userinput
  checkValidation(email, password): any {
    for(var i = 0; i < this.admins.length; i++) {
      this.arrayEmail.push(this.admins[i].email)
  }
  
    for(var i = 0; i < this.admins.length; i++) {
      this.arrayPassword.push(this.admins[i].password)
  }
  
  if (email == this.arrayEmail[0] && password == this.arrayPassword[0]) {
    localStorage.setItem("user", email)
   } else if (email == this.arrayEmail[1] && password == this.arrayPassword[1]) {

    localStorage.setItem("user", email)
    } 

  }
 // this method gets a userlist object from a json placeholder
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this._url)
  }
  
  

}







