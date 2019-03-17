//This displays the clicked user in the userlist gathered from JSONplaceholder, you can view the object details of a cerain person here.

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userId: number // This is the user ID
  userProfile: object //The user profile from jsonplaceholder

  constructor(private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
    //This captures the user that got clicked on and displays the ID
    this.route.params.subscribe(params => {
      this.userId = (params.id - 1);
      
    })
    //This calls for a method in autservice to get a json placeholder list and subscribes to the info matching the user ID.
    this.authService.getUsers()
    .subscribe(data => this.userProfile = data[this.userId]);


  }
  }

  


