import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InvoiceComponent,

  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule
  ],
  providers: []
})
export class InvoiceModule { }
