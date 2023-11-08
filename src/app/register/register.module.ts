import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    SharedModule
  ]
})
export class RegisterModule { }
