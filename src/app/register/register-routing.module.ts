import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "../users/users.component";
import { EditUserComponent } from "../users/edit-user.component";

const routes :Routes = [
    {
        path: '',
        component: RegisterComponent
    },
    {
        path: '',
        component: UsersComponent
    },
    {
        path: '',
        component: EditUserComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class RegisterRoutingModule { }