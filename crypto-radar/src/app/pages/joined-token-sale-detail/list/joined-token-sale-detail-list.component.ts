import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {JoinedTokenSaleDetailEditComponent} from '../edit/joined-token-sale-detail-edit.component';
import {JoinedTokenSaleDetailService} from '../joined-token-sale-detail.service';

@Component({
  selector: 'app-joined-token-sale-detail-list',
  templateUrl: './joined-token-sale-detail-list.component.html',
  styleUrls: ['./joined-token-sale-detail-list.component.scss']
})
export class JoinedTokenSaleDetailListComponent implements OnInit {

  tokenTypeList = [];

  constructor(
    private modalService: BsModalService,
    private joinedTokenSaleDetailService: JoinedTokenSaleDetailService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    const rq = {};
    this.joinedTokenSaleDetailService.getAll(rq).subscribe(res => {
      console.log(res);
    });
  }

  openAddDialog() {
    this.modalService.show(JoinedTokenSaleDetailEditComponent, {});
  }
}
