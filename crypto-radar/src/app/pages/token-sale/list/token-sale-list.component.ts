import {Component, OnInit} from '@angular/core';
import {TokenSaleTypeService} from '../../token-sale-type/token-sale-type.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {TokenSaleEditComponent} from '../edit/token-sale-edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './token-sale-list.component.html',
  styleUrls: ['./token-sale-list.component.scss']
})
export class TokenSaleListComponent implements OnInit {

  tokenTypeList = [];

  constructor(
    private modalService: BsModalService,
    private tokenSaleTypeService: TokenSaleTypeService) {
  }

  ngOnInit(): void {
    this.getAllTokenTypeList();
  }

  getAllTokenTypeList() {
    const rq = {};
    this.tokenSaleTypeService.getAll(rq).subscribe(res => {
      console.log(res);
    });
  }

  openAddDialog() {
    this.modalService.show(TokenSaleEditComponent, {});
  }
}
