import { PaymentConfigRoutingModule } from './payment-config-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentConfigComponent } from './payment-config.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PaymentConfigComponent
  ],
  imports: [
    CommonModule,
    PaymentConfigRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PaymentConfigModule { }
