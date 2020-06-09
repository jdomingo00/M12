import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { Router } from '@angular/router';
import { ClasesService } from './clases.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  clases = [];
  calendarPlugins = [dayGridPlugin];
  events = [];
  locale = esLocale;
  header = { title: 'left', center: '', right: 'prev,next' };

  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router, private claseService: ClasesService) {
    this.claseService.getClases().subscribe( elem => {
      this.clases = elem.body;
      this.setEvents(this.clases);
    });
   }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
  }

  setEvents(clases) {
    for(let i=0; i<clases.length; i++)
    {
      this.events.push({ title: clases[i].nivel, date: clases[i].dia, color: clases[i].color });
    }
  }
}
