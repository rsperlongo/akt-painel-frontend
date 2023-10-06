import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

enum Roles {
  ADMIN = 'Admintrador',
  OPERATOR = 'Operador',
  ATTENDANT = 'Atendente'
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  eRoles = Roles;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(4)]],
      finalNumber: ['', [Validators.required]],
      roles: [null , [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  get name() {
    return this.registerForm.get('name')!;
  }

  get username() {
    return this.registerForm.get('username')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  get finalNumber() {
    return this.registerForm.get('finalNumber')!;
  }

  get roles() {
    return this.registerForm.get('roles')!;
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.register(this.name.value, this.username.value, this.password.value, this.finalNumber.value, this.roles.value)
    .pipe(first())
    .subscribe({
      next:() => {
        this.router.navigate(['/users'], { relativeTo: this.route })
      },
      error: error => {
        this.loading = false
      }
    })
  }

}
