import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenSaleComponent} from './token-sale.component';
import {TokenSaleListComponent} from './list/token-sale-list.component';

const routes: Routes = [
  {
    path: '',
    component: TokenSaleComponent,
    children: [
      {
        path: '',
        component: TokenSaleListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenSaleRoutingModule { }
