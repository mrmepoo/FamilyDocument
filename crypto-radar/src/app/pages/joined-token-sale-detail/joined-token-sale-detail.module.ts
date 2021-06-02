import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JoinedTokenSaleDetailRoutingModule} from './joined-token-sale-detail-routing.module';
import {JoinedTokenSaleDetailComponent} from './joined-token-sale-detail.component';
import {JoinedTokenSaleDetailViewComponent} from './view/joined-token-sale-detail-view.component';
import {JoinedTokenSaleDetailEditComponent} from './edit/joined-token-sale-detail-edit.component';
import { JoinedTokenSaleDetailListComponent } from './list/joined-token-sale-detail-list.component';
import {JoinedTokenSaleDetailService} from './joined-token-sale-detail.service';
import {TokenSaleTypeService} from '../token-sale-type/token-sale-type.service';


@NgModule({
  declarations: [
    JoinedTokenSaleDetailComponent,
    JoinedTokenSaleDetailViewComponent,
    JoinedTokenSaleDetailEditComponent,
    JoinedTokenSaleDetailListComponent
  ],
  entryComponents: [
    JoinedTokenSaleDetailViewComponent,
    JoinedTokenSaleDetailEditComponent
  ],
  imports: [
    CommonModule,
    JoinedTokenSaleDetailRoutingModule
  ],
  providers: [
    JoinedTokenSaleDetailService,
    TokenSaleTypeService
  ]
})
export class JoinedTokenSaleDetailModule {
}
