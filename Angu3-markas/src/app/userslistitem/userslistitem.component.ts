import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-userslistitem',
  templateUrl: './userslistitem.component.html',
  styleUrls: ['./userslistitem.component.css']
})

export class UserslistitemComponent implements OnInit {
  @Input() user: string //Takes in user
  @Input() isSpecial: boolean //Takes in a boolean
  @Input() color: string // Takes in a color


  constructor() { }

  ngOnInit() {
    
  }

}

