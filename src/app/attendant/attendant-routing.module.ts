import { RouterModule, Routes } from "@angular/router";
import { AttendantComponent } from "./attendant.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: AttendantComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)]

})

export class AttendantRouterModule {}