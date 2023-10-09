import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendantComponent } from './attendant.component';
import { AttendantRouterModule } from './attendant-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AttendantComponent
  ],
  imports: [
    CommonModule,
    AttendantRouterModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    SharedModule

  ]
})
export class AttendantModule { }
