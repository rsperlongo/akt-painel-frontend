import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() viewMode = false;

    @Input() currentUser: User = {
        id: '',
        name: '',
        username: '',
        password: '',
        finalNumber: '',
        roles: '',
    }

  users?: any;
  content: any;
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;
  
  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.usersService.getAll()
    .pipe(first())
    .subscribe(users => this.users = users)

    this.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(4)]],
      finalNumber: ['', [Validators.required]],
      roles: ['', Validators.required]
    }); 

    this.title = 'Formulário de Cadastro';
    if (this.id) {
        this.title = 'Edit User';
        this.loading = true;
        this.usersService.getById(this.id)
            .pipe(first())
            .subscribe(x => {
                this.form.patchValue(x);
                this.loading = false;
            });
    }
  }

  get f() { return this.form.controls; }

  get name() {
    return this.form.get('name');
  }

  get username() {
    return this.form.get('username')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  get finalNumber() {
    return this.form.get('finalNumber')!;
  }

  get roles() {
    return this.form.get('roles')!;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.submitting = true;
    this.saveUser()
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigateByUrl('/users');
            },
        })
         
  }

  private saveUser() {
    return this.id
        ? this.usersService.update(this.id!, this.form.value)
        : this.authService.register(this.name?.value, this.username.value, this.password.value, this.finalNumber.value, this.roles.value );
  }

  deleteUser(id: string) {
    const user = this.users!.find((x: any) => x.id === id);
    user.isDeleting = true;
    this.usersService.delete(id)
        .pipe(first())
        .subscribe(() => this.users = this.users!.filter((x: any) => x.id !== id));
  }

}
