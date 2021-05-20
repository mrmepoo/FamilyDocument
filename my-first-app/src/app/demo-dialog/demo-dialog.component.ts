import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit,} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  styleUrls: ['./demo-dialog.component.scss'],
  templateUrl: './demo-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DemoDialogComponent implements OnInit {
  @Input() data: any;

  public constructor(public cdr: ChangeDetectorRef,
                     public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
