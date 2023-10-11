import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { first } from "rxjs";
import { AuthService } from "../services/auth.service";
import { User } from "../models";

enum Roles {
    ADMIN = 'Admintrador',
    OPERATOR = 'Operador',
    ATTENDANT = 'Atendente'
  }

@Component({ templateUrl: 'edit-user.component.html' })

export class EditUserComponent implements OnInit {
    @Input() viewMode = false;

    @Input() user: User = {
        id: '',
        name: '',
        username: '',
        password: '',
        finalNumber: '',
        roles: '',
    }

    message = '';

    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;
    eRoles = Roles;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

        this.form = this.formBuilder.group({
            name: [''],
            username: ['', [Validators.required]],
            password: ['', [Validators.minLength(4)] , (!this.id ? [Validators.required]: [])],
            finalNumber: ['', [Validators.required]],
            roles: [null , [Validators.required]]
        });

        this.title = 'Formulário de Cadastro';
        if (this.id) {
            this.title = 'Editar Usuário';
            this.loading = true;
        }
    }

    getUser(id: string, data: any) {
    this.usersService.getById(id)
      .pipe(first()) 
      .subscribe(user => this.user = user);
      }

    get f() { return this.form.controls; }

    get name() {
        return this.form.get('name')!;
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

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;
        this.saveUser()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/users');
                }
            })
    }

    private saveUser() {
        // create or update user based on id param
        return this.id
            ? this.usersService.update(this.id!, this.form.value)
            : this.authService.register(this.name.value, this.username.value, this.password.value, this.finalNumber.value, this.roles.value);
    }

    updateUser(id: string, data: any): void {
        this.message = '';

        this.usersService.update(id, data).subscribe({
            next: (res) => {
                console.log(res);
                this.message = res.message
                    ? res.message
                    : 'The status was updated successfully!';
            },
            error: (e) => console.error(e)
        });
    } 
}