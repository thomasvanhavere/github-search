import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() sendName = new EventEmitter<string>();
  userName: string = ""
  constructor() { }

  onInputChange(){
    if(this.userName.length>3){
      console.log(this.userName)
      this.sendName.emit(this.userName);
    }
  }
  ngOnInit(): void {
  }

}
