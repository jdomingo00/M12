import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() cancelar: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {}

  onAceptar() {
    localStorage.removeItem('escuelavlc-userName');
    localStorage.removeItem('escuelavlc-passwd');
    localStorage.removeItem('escuelavlc-tipo');
    this.cancelar.emit();
    this.router.navigate(['/login']);
  }

  onCancel() {
    this.cancelar.emit();
  }
}
