import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'token-sale',
        loadChildren: () => import('./token-sale/token-sale.module').then(m => m.TokenSaleModule)
      },
      {
        path: 'joined-token-sale-detail',
        loadChildren: () => import('./joined-token-sale-detail/joined-token-sale-detail.module').then(m => m.JoinedTokenSaleDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
