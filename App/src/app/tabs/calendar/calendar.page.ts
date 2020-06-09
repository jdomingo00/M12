import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  clases = [
    { nivell: 'Iniciacio - Adult', dia: '2020-06-06', color: 'purple' },
    { nivell: 'Iniciacio - Infantil', dia: '2020-06-06', color: 'red' },
    { nivell: 'Iniciacio - Adult', dia: '2020-06-05', color: 'purple' },
    { nivell: 'Iniciacio - Adult', dia: '2020-06-03', color: 'purple' },
    { nivell: 'Iniciacio - Infantil', dia: '2020-06-02', color: 'red' },
    { nivell: 'Mig - Adult', dia: '2020-06-01', color: 'blue' },
    { nivell: 'Mig - Infantil', dia: '2020-06-04', color: 'green' },
    { nivell: 'Mig - Adult', dia: '2020-06-02', color: 'blue' },
    { nivell: 'Intensiu', dia: '2020-06-08', color: 'pink' },
    { nivell: 'Intensiu', dia: '2020-06-09', color: 'pink' },
    { nivell: 'Intensiut', dia: '2020-06-03', color: 'pink' }
  ]
  calendarPlugins = [dayGridPlugin];
  events = [];
  locale = esLocale;
  header = { title: 'left', center: '', right: 'prev,next' };

  constructor() { }

  ngOnInit() {
    this.setEvents(this.clases)
  }

  setEvents(clases) {
    for(let i=0;i<clases.length;i++)
    {
      this.events.push({ title: clases[i].nivell, date: clases[i].dia, color: clases[i].color });
    }
  }
}
