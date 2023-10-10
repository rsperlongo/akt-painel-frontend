import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentConfigComponent } from "./payment-config.component";

const routes: Routes = [
    {
        path: '',
        component: PaymentConfigComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class PaymentConfigRoutingModule {}