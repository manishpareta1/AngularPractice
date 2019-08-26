import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSrvcService } from './new-srvc.service';
import { NewViewComponent } from './view/new-view/new-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NewViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewSrvcService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
  
}
