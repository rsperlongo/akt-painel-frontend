import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { operatorsRoutingModule } from './operators-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SidebarOperatorComponent } from '../components/sidebar/sidebar-operator.component';
import { InvoiceService } from '../services/invoice.service';
import { HttpClientModule } from '@angular/common/http';



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
    SharedModule,
    HttpClientModule
  ],
  providers: [InvoiceService]
})
export class OperatorsModule { }
