import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntComponent } from './ent/ent.component';
import { EjeComponent } from './eje/eje.component';
import { CentrogestorComponent } from './centrogestor/centrogestor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProveedoreesComponent } from './proveedorees/proveedorees.component';
import { ConsultaProveedoresComponent } from './consulta-proveedores/consulta-proveedores.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'ent', component: EntComponent },
    { path: 'eje', component: EjeComponent},
    { path: 'centro-gestor', component: CentrogestorComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'proveedorees', component: ProveedoreesComponent },
    { path: 'Cproveedores', component: ConsultaProveedoresComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }, //route by default
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}