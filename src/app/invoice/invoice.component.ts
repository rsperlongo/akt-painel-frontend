import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      nomeCliente: [''],
      cpfCnpj: ['', [Validators.required]],
      dataVencimento: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: [null , [Validators.required]],
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
}
