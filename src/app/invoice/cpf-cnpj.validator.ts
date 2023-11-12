import { AbstractControl, ValidatorFn } from '@angular/forms';

// Função de validação de CPF/CNPJ
export function cpfCnpjValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value || '';



    // Verifica se o valor tem exatamente 11 (CPF) ou 14 (CNPJ) dígitos
    if (value.length === 11 || value.length === 14) {
      return null; // Retorna null se passar na validação (sem erro)
    }

    // Se não passar na validação, retorna um objeto de erro
    return { 'cpfCnpjInvalid': true };
  };
}
