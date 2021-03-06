import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { MedecinsComponent } from './medecins/medecins.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'safesante', component: MedecinsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
