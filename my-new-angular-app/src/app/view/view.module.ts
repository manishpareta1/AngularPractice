import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewViewCompComponent } from './new-view-comp/new-view-comp.component';



@NgModule({
  declarations: [NewViewCompComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewViewCompComponent
  ]
})
export class ViewModule { }
