import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminLogin} from '../models/admin-login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public user: string //Input value
  
  public loggedUser: string //String to check if localStorage is empty or not
  public clickMessage: string //Tells user to fill input
  public userModel: AdminLogin = new AdminLogin('', '')
  
  // runs loggeduser at first to see what it contains before rendering template
  constructor(private authService: AuthServiceService) {
    this.loggedUser = this.authService.checkIfLoggedIn()
    console.log(this.userModel)
  }
  
  // Function on button login, loggeduser sets to "true" since localstorage adds to loggeduser via service, it calls for a method in service
  //Then it sets loggedUser to the "checkifloggedin" method in service
  //User must type in input
  onClickLogin():void {
    console.log(this.userModel.email)
      this.authService.login(this.userModel.email)
    this.loggedUser = this.authService.checkIfLoggedIn()
    
  }
  
  
//This method loggs out user, it sends to service that btn is clicked and there it clears the localstorage, and returns "checkIfloggedin" to loggedUser
  logOut():void {
    this.authService.logOut()
    this.loggedUser = this.authService.checkIfLoggedIn()
  }

  onSubmit() {
    this.authService.checkValidation(this.userModel.email, this.userModel.password)
  
  }

  ngOnInit() {
  }

}

