import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from './invoice.service';
import { Router } from '@angular/router';
import { cpfCnpjValidator } from './cpf-cnpj.validator';
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
  mostrarMensagemErro?: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
   private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      codigoBarrasPix: [''],
      nomeAvalistaBoleto: [''],
      codigoCliente: [''],
      cidade: [''],
      nomeCliente: ['', Validators.required],
      cpfCnpj: ['', [Validators.required, cpfCnpjValidator()]],
      dataVencimento: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: [''],
    });
  }

  verificarValidade() {
    const campo = this.invoiceForm.get('cpfCnpj');
    this.mostrarMensagemErro = campo?.touched && campo?.invalid;
  }

  limparFormulario() {
    // Isso irá zerar todos os campos do formulário
    this.invoiceForm.reset();
  }

  registrar() {
    const formulario = this.invoiceForm.value;
    let listaFormulario = JSON.parse(sessionStorage.getItem('listaFormulario') || '[]');
    listaFormulario.push(formulario);
    sessionStorage.setItem('listaFormulario', JSON.stringify(listaFormulario));
    this.router.navigate(['attendant']);
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

  get codigoBarrasPix() {
    return this.invoiceForm.get('codigoBarrasPix')
  }

  get codigoCliente() {
    return this.invoiceForm.get('codigoCliente')
  }
}
