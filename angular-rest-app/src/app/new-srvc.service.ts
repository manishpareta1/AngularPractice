import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewSrvcService {

  sendMessage(args){
    return args + ".... Sent from Service!!"
  }

  constructor() { }
}
