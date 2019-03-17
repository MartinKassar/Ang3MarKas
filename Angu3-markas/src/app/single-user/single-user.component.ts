import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userId: number
  userProfile: object

  constructor(private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
    //This captures the user that got clicked on and sets it to username
    this.route.params.subscribe(params => {
      this.userId = (params.id - 1);
      
    })
    this.authService.getUsers()
    .subscribe(data => this.userProfile = data[this.userId]);


  }
  }

  


