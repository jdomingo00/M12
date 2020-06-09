import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.tipo!='0') {
      this.router.navigate(['/tabs/day']);
    }
  }
}
