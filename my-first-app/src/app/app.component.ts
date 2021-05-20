import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DemoDialogComponent} from './demo-dialog/demo-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  public constructor(public cdr: ChangeDetectorRef,
                     public modalService: NgbModal) {
  }


  ngOnInit(): void {
    let mapCanvas = document.createElement('canvas');
    let canvasDiv = document.getElementById('canvasDiv');
    let mapCanvasContext = mapCanvas.getContext("2d");
    mapCanvas.id = "mapCanvas";
    mapCanvas.height = 420;
    mapCanvas.width = 715;
    canvasDiv.appendChild(mapCanvas);
    mapCanvas.addEventListener('click', this.openModal.bind(this));
    const imageObj = new Image();
    imageObj.onload = () => {
      mapCanvasContext.drawImage(imageObj, 0, 0);
    };
    imageObj.src = 'https://kinhdoanhthucchien.files.wordpress.com/2019/03/no-cost-online-business-58a6434c3df78c345bae15ae.jpg';
  }

  openModal() {
    const modalRef = this.modalService.open(DemoDialogComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Tieu de';
    modalRef.componentInstance.data = {};
    modalRef.result.then(result => {
    }, reason => {
    });


  }
}
