import {Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-server',
  styleUrls: ['./server.component.scss'],
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {

  id = 10;
  name = 'Server ';
  status = 'offline';

  public constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.status == 'online' ? 'green' : 'red';
  }
}
