import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PixComponent } from "./pix.component";
import { AttendantComponent } from "../attendant/attendant.component";
import { OperatorsComponent } from "../operators/operators.component";

const routes: Routes = [
    {
        path: '',
        component: PixComponent
    },
    {
        path: '',
        component: AttendantComponent
    },
    {
        path: '',
        component: OperatorsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class PixRoutingModule {}