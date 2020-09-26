import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() callParentFunction:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.callParentFunction.emit({name:"sanjeet"})
  }

}
