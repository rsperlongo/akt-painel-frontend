import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "../register/register.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { UsersComponent } from "../users/users.component";

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: '',
        component: UserDetailComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UserDetailRoutingModule {}