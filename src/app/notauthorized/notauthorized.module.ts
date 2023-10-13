import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotauthorizedComponent } from './notauthorized.component';
import { NotAuthorizedRoutingModule } from './notauthorized-routing.module';



@NgModule({
  declarations: [
    NotauthorizedComponent
  ],
  imports: [
    CommonModule,
    NotAuthorizedRoutingModule
  ]
})
export class NotauthorizedModule { }
