import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperatorsComponent } from "./operators.component";
import { InvoiceComponent } from "../invoice/invoice.component";
import { PixComponent } from "../pix/pix.component";

const routes: Routes = [
    {
        path: '',
        component: OperatorsComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },
    {
        path: 'pix',
        component: PixComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class operatorsRoutingModule {}