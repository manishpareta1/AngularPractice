import { Component, OnInit } from '@angular/core';
import { NewServiceService } from 'src/app/new-service.service';

@Component({
  selector: 'app-new-view-comp',
  templateUrl: './new-view-comp.component.html',
  styleUrls: ['./new-view-comp.component.css']
})
export class NewViewCompComponent implements OnInit {

  service: String;
  constructor(private srvc: NewServiceService) {
    this.service = this.srvc.getValue("Called from NewViewCompComponent");
   }
  
  ngOnInit() {
  }

}
