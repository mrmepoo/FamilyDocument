import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './joined-token-sale-detail-edit.component.html',
  styleUrls: ['./joined-token-sale-detail-edit.component.scss']
})
export class JoinedTokenSaleDetailEditComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

}
