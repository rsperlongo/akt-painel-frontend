import { RouterModule, Routes } from "@angular/router";
import { AttendantComponent } from "./attendant.component";
import { NgModule } from "@angular/core";
import { InvoiceComponent } from "../invoice/invoice.component";
import { PixComponent } from "../pix/pix.component";

const routes: Routes = [
    {
        path: '',
        component: AttendantComponent
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

export class AttendantRouterModule {}