import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  classe = { data: 'Dilluns 2 de Maig', desc: 'Classe iniciació - Adults. Port de Valencia - 19:00 a 20:30'}
  constructor() { }

  ngOnInit() {
  }

}
