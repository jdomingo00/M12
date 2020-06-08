import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.container.html',
  styleUrls: ['./horarios.container.css']
})
export class HorariosContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  }

}
