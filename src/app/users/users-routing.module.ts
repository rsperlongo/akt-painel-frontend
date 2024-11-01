import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { RegisterComponent } from "../register/register.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [ 
            {
                path: 'edit/:id',
                component: UserDetailComponent
            }
         ]
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

export class UsersRoutingModule {}