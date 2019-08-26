import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  message: String = "Today's Date is:";
  dateMessage : String;
  count: number = 0;
  constructor() { 
    setInterval(()=>{
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    },1000);
    
  }

  ngOnInit() {
  }

  getCount(){
    console.log(this.count);
    return this.count++;
  }


}
