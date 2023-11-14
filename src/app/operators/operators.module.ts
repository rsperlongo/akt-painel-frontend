import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { operatorsRoutingModule } from './operators-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CpfCnpjMaskPipe } from './cpf-cnpj-mask.pipe';



@NgModule({
  declarations: [
    OperatorsComponent,
    CpfCnpjMaskPipe
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
  providers: [],
  exports: [CpfCnpjMaskPipe]
})
export class OperatorsModule { }
