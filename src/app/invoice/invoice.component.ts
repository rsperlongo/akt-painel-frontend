import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
   // private router: Router,
   // private route: ActivatedRoute,
   // private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      codigoBarrasPix: [''],
      nomeAvalistaBoleto: [''],
      codigoCliente: [''],
      tipo: [''],
      cidade: [''],
      nomeCliente: ['', Validators.required],
      cpfCnpj: ['', [Validators.required]],
      dataVencimento: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: [''],
    });
  }

  get f() { return this.invoiceForm.controls as unknown as AbstractControl }

  get nomeCliente() {
    return this.invoiceForm.get('nomeCliente')!;
  }

  get cpfCnpj() {
    return this.invoiceForm.get('cpfCnpj')!;
  }

  get dataVencimento() {
    return this.invoiceForm.get('dataVencimento')!;
  }

  get valor() {
    return this.invoiceForm.get('valor')!;
  }

  get descricao() {
    return this.invoiceForm.get('descricao')!;
  }

  get nomeAvalistaBoleto() {
    return this.invoiceForm.get('nomeAvalistaBoleto')
  }

  get cidade() {
    return this.invoiceForm.get('cidade')
  }

  get tipo() {
    return this.invoiceForm.get('tipo')
  }

  get codigoBarrasPix() {
    return this.invoiceForm.get('codigoBarrasPix')
  }

  get codigoCliente() {
    return this.invoiceForm.get('codigoCliente')
  }


  /* onSubmit() {
    this.submitted = true;

    if (this.invoiceForm.invalid) {
        return;
    }
    this.loading = true;
    this.invoiceService.registerSocket(
      this.nomeCliente.value,
      this.cpfCnpj.value,
      this.dataVencimento.value,
      this.nomeAvalistaBoleto?.value,
      this.valor.value,
      this.descricao.value,
      this.cidade?.value,
      this.tipo?.value,
      this.codigoBarrasPix?.value,
      this.codigoCliente?.value
    )
  } */
}
