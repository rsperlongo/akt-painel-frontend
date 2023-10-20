import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterLink } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { InvoiceService } from './invoice/invoice.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [provideNgxMask(), AuthGuardService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
