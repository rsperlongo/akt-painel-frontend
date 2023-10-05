import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
