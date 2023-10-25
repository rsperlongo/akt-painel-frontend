import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperatorsComponent } from "./operators.component";
import { InvoiceComponent } from "../invoice/invoice.component";
import { PixComponent } from "../pix/pix.component";
import { OperatorGuard } from "../services/operator.guard";
import { UsersComponent } from "../users/users.component";
import { AdminGuard } from "../services/admin.guard";
import { ROLE } from "../models/role";
import { RoleGuard } from "../services/role.guard";

const routes: Routes = [
    {
        path: '',
        component: OperatorsComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent,
        canActivate: [OperatorGuard]
    },
    {
        path: 'pix',
        component: PixComponent,
        canActivate: [OperatorGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [RoleGuard],
        data: { roles: 'ADMIN' }
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class operatorsRoutingModule {}