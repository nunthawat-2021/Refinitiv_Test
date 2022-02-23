import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
const routes: Routes = [
  { path: 'test', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
