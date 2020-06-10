import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as LEAFLET from 'leaflet';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.container.html',
  styleUrls: ['./horarios.container.css']
})
export class HorariosContainer implements OnInit {

  @ViewChild('map', {static: true}) map: ElementRef;
  constructor() { }

  ngOnInit(): void {

    console.log(this.map);
    // Carregar les coordenades
    this.map.nativeElement = LEAFLET.map(this.map.nativeElement).setView([39.452686, -0.362120], 12);
    // Carregar les imatges del mapa
    LEAFLET.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20
    }).addTo(this.map.nativeElement);

    LEAFLET.marker([39.460540, -0.331553]).addTo(this.map.nativeElement).bindPopup('Puerto de Valencia');
    LEAFLET.marker([39.429922, -0.408786]).addTo(this.map.nativeElement).bindPopup('Pista patinaje Paiporta');
  }

}
