import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  classe = { data: 'Dilluns 2 de Maig', desc: 'Classe iniciació - Adults. Port de Valencia - 19:00 a 20:30'}
  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
  }

}
