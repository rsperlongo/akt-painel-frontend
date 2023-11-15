import { Invoice } from './../models/invoice';
import { Component, Input } from '@angular/core';
import { PaymentConfigService } from '../services/payment-config.service';
import { PaymentConfig } from '../models/payment-config';
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-payment-config',
  templateUrl: './payment-config.component.html',
  styleUrls: ['./payment-config.component.scss']
})
export class PaymentConfigComponent {
    @Input('listaformulario') invoice! : InvoiceComponent

    constructor(private configPaymentService: PaymentConfigService) {}

    ngOninit():void {
      // this.paymentConfig();
    }
}
