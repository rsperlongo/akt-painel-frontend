import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotauthorizedComponent } from "./notauthorized.component";

const routes: Routes = [
    {
        path: '',
        component: NotauthorizedComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class NotAuthorizedRoutingModule {}