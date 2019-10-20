import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatatableComponent} from './views/datatable/datatable.component';
import {HomeComponent} from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'table',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
