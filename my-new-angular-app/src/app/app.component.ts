import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-angular-app';
  user: User;
  oneWayInputText: String= ' oneWayInputText';
  TowWayInputText: String= 'TowWayInputText';
  serviceCallValue: String;
  
  /**
   * Parametarize constructor to inject NewServiceService object during initialization of the component.
   * This is to demonstrate dependency injection in Angular using constructor.
   * argument private srvc- defines that srvc is a class level varialbe, a different way of declaring
   * class level variable.
   */
  constructor(private srvc: NewServiceService){
     this.user = new User();
     this.user.fName = "Manish";
     this.user.lName = "Pareta";
     this.user.designation = " Technical Architect";
     this.user.address = "Singasandra Bangalore";
     this.user.phone = ['1234567890','0987654321'];
     this.user.company = "Tavant";
     //invoking service method
     this.serviceCallValue = this.srvc.getValue("Called From AppComponent!!");
  }
}
