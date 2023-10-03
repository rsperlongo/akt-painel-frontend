import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class DashboardRoutingModule {}