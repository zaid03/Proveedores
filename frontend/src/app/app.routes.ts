import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntComponent } from './ent/ent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProveedoreesComponent } from './proveedorees/proveedorees.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'ent', component: EntComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'proveedorees', component: ProveedoreesComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, //route by default
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}