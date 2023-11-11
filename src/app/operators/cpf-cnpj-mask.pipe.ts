import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpjMask'
})
export class CpfCnpjMaskPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return value;
    }

    // Máscara de CPF
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    // Máscara de CNPJ
    if (value.length === 14) {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return value;
  }
}
