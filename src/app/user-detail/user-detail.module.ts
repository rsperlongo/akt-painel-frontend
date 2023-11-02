import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';



@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    SharedModule
  ]
})
export class UserDetailModule { }
