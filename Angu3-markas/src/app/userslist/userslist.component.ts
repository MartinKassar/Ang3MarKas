import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
@Input() users: string[] //Takes in Users

letters: string = '0123456789ABCDEF' //Collection of hexa colors
color: string = '#' // The hexa color combination

constructor() {
  
 }

  ngOnInit() {
  }

// Function that changes random color, it loops trough a combo of hexa colors.
changeColor():void {
  this.color = '#'; 
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
}
}

