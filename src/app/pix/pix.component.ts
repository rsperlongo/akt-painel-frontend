import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PixService } from '../services/pix.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.scss']
})
export class PixComponent implements OnInit {
  constructor(private pixService: PixService, private formBuilder: FormBuilder) {}
  submitted = false;
  loading = false;
  submitting = false;
  pixForm!: FormGroup;
  pix?: any
  

  ngOnInit(): void {
    this.pixForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cidade: ['', Validators.required],
      chave: ['', Validators.required],
      valor: ['', Validators.required]
    })
  }

  get f() { return this.pixForm.controls; }

  get nome() {
    return this.pixForm.get('nome')
  }

  get cidade() {
    return this.pixForm.get('cidade')
  }

  get saida() {
    return this.pixForm.get('saida')
  }

  get chave() {
    return this.pixForm.get('chave')
  }

  get valor() {
    return this.pixForm.get('valor')
  }

  createPix() {
    this.submitted = true;

    if (this.pixForm.invalid) {
      return;
    }

    this.submitting = true;
    this.pixService.generatePix(
      this.nome?.value, 
      this.saida?.value, 
      this.valor?.value, 
      this.cidade?.value
      ).subscribe({
        next: (data) => {
          this.pix = data
          console.log(data)
        },
        error: (e) => e = console.error(e)
      })

  }
}
