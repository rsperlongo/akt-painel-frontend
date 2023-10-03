import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.minLength(6), Validators.required]
      })
  }

  get username() {
    return this.form.get('username')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  login() {

  }

}
