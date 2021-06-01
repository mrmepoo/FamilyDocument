import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
