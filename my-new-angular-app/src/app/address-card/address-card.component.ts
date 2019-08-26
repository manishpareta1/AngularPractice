import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input('titleName') titleName: String;
  @Input('dummyName') dummyName: String;
  @Input('user') userObj: User;
  isCollasped: boolean = true;
  constructor() {
    
   }

   //lify cycle hooks, will be called once construcor initialization is done for the component
  ngOnInit() {
    this.user={
      fName: this.userObj.fName,
      lName: this.userObj.lName,
      designation: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone,
      company: this.userObj.company
    };
  }

  toggleCollapse(){
    this.isCollasped = !this.isCollasped;
  }

}
