import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

// const config: SocketIoConfig = { url: 'https://sistema-boleto-server-production.up.railway.app', options: {} };

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
    // SocketIoModule.forRoot(config),
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule
  ],
  providers: []
})
export class InvoiceModule { }
