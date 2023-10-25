import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { EditUserComponent } from "./edit-user.component";
import { RoleGuard } from "../services/role.guard";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'edit/:id',
        component: EditUserComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UsersRoutingModule {}