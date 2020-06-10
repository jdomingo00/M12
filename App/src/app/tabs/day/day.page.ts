import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DayService } from './day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  clase;
  disable = false;
  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router, private dayService: DayService) { }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
    this.dayService.getData().subscribe( elem => {
      this.clase = elem.body;
    });
  }

  asistir(variable) {
    this.dayService.editAsistencia(variable).subscribe();
    this.disable = true;
  }
}
