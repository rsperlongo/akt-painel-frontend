import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { operatorsRoutingModule } from './operators-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SidebarOperatorComponent } from '../components/sidebar/sidebar-operator.component';



@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    operatorsRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class OperatorsModule { }
