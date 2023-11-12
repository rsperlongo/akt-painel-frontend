import { Component } from '@angular/core';
import { PaymentConfigService } from '../services/payment-config.service';
import { PaymentConfig } from '../models/payment-config';

@Component({
  selector: 'app-payment-config',
  templateUrl: './payment-config.component.html',
  styleUrls: ['./payment-config.component.scss']
})
export class PaymentConfigComponent {

    constructor(private configPaymentService: PaymentConfigService) {}
    invoicePix: PaymentConfig[] = [];

    ngOninit():void {
      this.paymentConfig();
    }

    paymentConfig() {
      this.configPaymentService.getPaymentConfig()
      .subscribe({
        next: (data) => {
          this.invoicePix = data
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
}
