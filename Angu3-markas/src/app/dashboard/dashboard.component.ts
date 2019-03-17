import { Component, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // LoggedUser is going to contain wether we have localstorage or not and template rendering depends on it
  loggedUser: string

  //My userlist from JsonPlaceHolder
  public users = [];

  // Running to see what loggedUser contains first and renders the template
  constructor(private authService: AuthServiceService) {
    this.loggedUser = this.authService.checkIfLoggedIn()
   }

   //Calling on a method in authservice that gets an object from jsonplaceholder, and the subscribes to it.
  ngOnInit() {
    this.authService.getUsers()
    .subscribe(data => this.users = data);
    
  }
  
  

}


