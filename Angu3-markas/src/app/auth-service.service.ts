import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model'


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  arrayEmail: string[] = []
  arrayPassword: string[] = []

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

  constructor() { }

  //this method sets a localstorage to the user with the key being user
  login(email): void {
    console.log('model', email)
    localStorage.setItem("user", email)


  }


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

  checkValidation(email, password): any {
    for(var i = 0; i < this.admins.length; i++) {
      this.arrayEmail.push(this.admins[i].email)
  }
  
    for(var i = 0; i < this.admins.length; i++) {
      this.arrayPassword.push(this.admins[i].password)
  }
  
  if (email == this.arrayEmail[0] && password == this.arrayPassword[0]) {
    alert("correct")
   } else if (email == this.arrayEmail[1] && password == this.arrayPassword[1]) {
    alert("correct")
    }
  }


}




