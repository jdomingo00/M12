import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {

  @Input() datos;
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  goEdit() {
    this.edit.emit();
  }

}
