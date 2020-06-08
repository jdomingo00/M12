import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  calendarPlugins = [dayGridPlugin];
  events = [
    { title: 'event', date: '2020-06-05', color: 'purple' },
    { title: 'event', date: '2020-06-02', color: 'green' },
    { title: 'event', date: '2020-06-01', color: 'red' },
    { title: 'event', date: '2020-06-03', color: 'pink' },
    { title: 'event', date: '2020-06-05', color: 'blue' },
    { title: 'event', date: '2020-06-07' }
  ];
  locale = esLocale;
  header = { title: 'left', center: '', right: 'prev,next' };

  constructor() { }

  ngOnInit() { }
}
