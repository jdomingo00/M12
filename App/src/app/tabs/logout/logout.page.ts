import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAceptar() {
    localStorage.removeItem('escuelavlc-userName');
    localStorage.removeItem('escuelavlc-passwd');
    localStorage.removeItem('escuelavlc-tipo');
    this.router.navigate(['/login']);
  }

  onCancel() {
    this.router.navigate(['/tabs/alumnos']);
  }

}
