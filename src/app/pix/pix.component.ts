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
      nomeCliente: ['', Validators.required],
      cidade: ['', Validators.required],
      chave: ['', Validators.required],
      valorAPagar: ['', Validators.required]
    })
  }

  get f() { return this.pixForm.controls; }

  get nomeCliente() {
    return this.pixForm.get('nomeCliente')
  }

  get cidade() {
    return this.pixForm.get('nomeCliente')
  }

  get saida() {
    return this.pixForm.get('saida')
  }

  get valorAPagar() {
    return this.pixForm.get('valorAPagar')
  }

  createPix() {
    this.submitted = true;

    if (this.pixForm.invalid) {
      return;
    }

    this.submitting = true;
    this.pixService.generatePix(
      this.nomeCliente?.value, 
      this.saida?.value, 
      this.valorAPagar?.value, 
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
