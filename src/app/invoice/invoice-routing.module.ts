import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvoiceComponent } from "./invoice.component";
import { EditInvoiceComponent } from "./edit-invoice.component";

const routes: Routes = [
    {
        path: '',
        component: InvoiceComponent
    },
    {
        path: 'editar',
        component: EditInvoiceComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class InvoiceRoutingModule {}
