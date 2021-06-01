import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TokenSaleRoutingModule} from './token-sale-routing.module';
import {TokenSaleComponent} from './token-sale.component';
import {TokenSaleViewComponent} from './add/token-sale-view.component';
import {TokenSaleEditComponent} from './edit/token-sale-edit.component';
import { TokenSaleListComponent } from './list/token-sale-list.component';
import {TokenSaleService} from './token-sale.service';
import {TokenSaleTypeService} from '../token-sale-type/token-sale-type.service';


@NgModule({
  declarations: [
    TokenSaleComponent,
    TokenSaleViewComponent,
    TokenSaleEditComponent,
    TokenSaleListComponent
  ],
  entryComponents: [
    TokenSaleViewComponent,
    TokenSaleEditComponent
  ],
  imports: [
    CommonModule,
    TokenSaleRoutingModule
  ],
  providers: [
    TokenSaleService,
    TokenSaleTypeService
  ]
})
export class TokenSaleModule {
}
