import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { cpfCnpjValidator } from "./cpf-cnpj.validator";

@Component({
    selector: 'app-edit-invoice',
    templateUrl: './edit-invoice.component.html',
    // styleUrls: ['./edit.invoice.component.scss']
  })
  export class EditInvoiceComponent implements OnInit {
    invoiceEditForm!: FormGroup;
    loading = false;
    submitted = false;
    mostrarMensagemErro?: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    ) {}

    ngOnInit() {
        this.invoiceEditForm = this.formBuilder.group({
            codigoBarrasPix: [''],
            nomeAvalistaBoleto: [''],
            codigoCliente: [''],
            tipo: [''],
            cidade: [''],
            nomeCliente: ['', Validators.required],
            cpfCnpj: ['', [Validators.required, cpfCnpjValidator()]],
            dataVencimento: ['', [Validators.required]],
            valor: ['', [Validators.required]],
            descricao: [''],
          });
    }

    verificarValidade() {
        const campo = this.invoiceEditForm.get('cpfCnpj');
        this.mostrarMensagemErro = campo?.touched && campo?.invalid;
      }
    
      limparFormulario() {
        // Isso irá zerar todos os campos do formulário
        this.invoiceEditForm.reset();
      }
    
      registrar() {
        const formulario = this.invoiceEditForm.value;
        let listaFormulario = JSON.parse(sessionStorage.getItem('listaFormulario') || '[]');
        listaFormulario.push(formulario);
        sessionStorage.setItem('listaFormulario', JSON.stringify(listaFormulario));
        this.router.navigate(['attendant']);
      }

      get f() { return this.invoiceEditForm.controls as unknown as AbstractControl }

  get nomeCliente() {
    return this.invoiceEditForm.get('nomeCliente')!;
  }

  get cpfCnpj() {
    return this.invoiceEditForm.get('cpfCnpj')!;
  }

  get dataVencimento() {
    return this.invoiceEditForm.get('dataVencimento')!;
  }

  get valor() {
    return this.invoiceEditForm.get('valor')!;
  }

  get descricao() {
    return this.invoiceEditForm.get('descricao')!;
  }

  get nomeAvalistaBoleto() {
    return this.invoiceEditForm.get('nomeAvalistaBoleto')
  }

  get cidade() {
    return this.invoiceEditForm.get('cidade')
  }

  get tipo() {
    return this.invoiceEditForm.get('tipo')
  }

  get codigoBarrasPix() {
    return this.invoiceEditForm.get('codigoBarrasPix')
  }

  get codigoCliente() {
    return this.invoiceEditForm.get('codigoCliente')
  }
  }