import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JoinedTokenSaleDetailComponent} from './joined-token-sale-detail.component';
import {JoinedTokenSaleDetailListComponent} from './list/joined-token-sale-detail-list.component';

const routes: Routes = [
  {
    path: '',
    component: JoinedTokenSaleDetailComponent,
    children: [
      {
        path: '',
        component: JoinedTokenSaleDetailListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinedTokenSaleDetailRoutingModule { }
