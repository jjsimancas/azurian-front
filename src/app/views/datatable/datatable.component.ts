import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/Client';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() clients: Client[];

  constructor() {}

  ngOnInit() {
  }

}
