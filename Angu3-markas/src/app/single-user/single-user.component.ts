import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  username: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //This captures the user that got clicked on and sets it to username
    this.route.params.subscribe(params => {
      this.username = params.id;
    })
  }

  

}
