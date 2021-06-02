import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './token-sale-edit.component.html',
  styleUrls: ['./token-sale-edit.component.scss']
})
export class TokenSaleEditComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

}
