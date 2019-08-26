import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {


  getValue(args: String){
    return args + "....sent from Service"
  }
  constructor() {
    
  }
}
