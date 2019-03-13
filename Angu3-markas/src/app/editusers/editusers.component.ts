import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
  @Input() user:string [] //takes in user
  @Input() usersList: string []
  @Output() addUser  = new EventEmitter<string>() // Sends out addUser
  @Output() removeUser = new EventEmitter<void>() // Sends out removeUser

  
  public addUsername: string //Input value
  clickMessage:string = '' //Message on button click
  
  // Function on button add click
  onClickAdd():void {
    if (this.addUsername != '' && this.addUsername != undefined) { //If statement to guide the user and emit on add if its not null
    this.clickMessage = 'You added a user'
    this.addUser.emit(this.addUsername)
    this.addUsername = '';
    } else {
      this.clickMessage = 'You must add a User'
    }
  }
  
  // Function on button remove click
  onClickRemove():void {
    if(this.usersList.length > 0) {
    this.removeUser.emit()
    this.clickMessage = 'You removed a user'
    } else {
      this.clickMessage = 'Your list is empty'
    }
  }

  constructor() { }

  ngOnInit() {
  }
  

}
