import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { NewServiceService } from './new-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule  
    
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
