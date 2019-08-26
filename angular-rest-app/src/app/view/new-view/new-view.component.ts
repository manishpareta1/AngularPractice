import { Component, OnInit } from '@angular/core';
import { NewSrvcService } from 'src/app/new-srvc.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.component.html',
  styleUrls: ['./new-view.component.css']
})
export class NewViewComponent implements OnInit {

  message: String;
  userName: String;
  response: any;

  constructor(private srvc: NewSrvcService, private httpClient: HttpClient){
    this.message = this.srvc.sendMessage("Hi from New Service Call!! - ");
  }
  search(){
    this.httpClient.get('https://api.github.com/users/'+this.userName)
    .subscribe((response) =>{
      this.response = response;
      console.log('search is called  for '+ this.userName);
      
    })
  }
  ngOnInit() {
    //In angular world, get() is an asynchronous call, and returns an observable object(also known as promise in Angular2)
    //and we can perfom some function after receiving the response by provide a function on the observable
    //object
    let obs = this.httpClient.get('https://api.github.com/users/koushikkothagal');
    //Printing the information by using different set of functions
    obs.subscribe(() => console.log('Congrats!! REST API Call completed.'));
    obs.subscribe((response) => console.log(response));
    
    
  }

}
