import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model'


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  public admins:AdminFull[] = [{
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
  login(user):void {
    localStorage.setItem("user", user)    
    
  }

 
  // this method clears out local storage
  logOut():void {
    localStorage.clear();

  }

    // this method returns localstorage
  checkIfLoggedIn():any {
    return localStorage.getItem("user")
  }

  
}
