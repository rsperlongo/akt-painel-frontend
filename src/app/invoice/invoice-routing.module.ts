import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvoiceComponent } from "./invoice.component";
import { AttendantComponent } from "../attendant/attendant.component";

const routes: Routes = [
    {
        path: '',
        component: InvoiceComponent
    },
    {
        path: '',
        component: AttendantComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class InvoiceRoutingModule {}