import { SidebarOperatorComponent } from './sidebar-operator.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "./sidebar.component";
import { SidebarAttendantComponent } from './sidebar-attendant.component';
import { AdminGuard } from 'src/app/services/admin.guard';
import { OperatorGuard } from 'src/app/services/operator.guard';

const routes: Routes = [
    {
        path: '',
        component: SidebarComponent,
        
    },
    {
        path: '',
        component: SidebarOperatorComponent,
    },
    {
        path: '',
        component: SidebarAttendantComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    providers: []
})

export class SidebarRoutingModule {}