import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../models/Client';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html'
})
export class MediumComponent implements OnInit {
  @Input() clients: Client[];

  constructor() {}

  ngOnInit() {
  }

}
