import { SidebarOperatorComponent } from './sidebar-operator.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "./sidebar.component";

const routes: Routes = [
    {
        path: '',
        component: SidebarComponent,
        
    },
    {
        path: '',
        component: SidebarOperatorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    providers: []
})

export class SidebarRoutingModule {}