import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
    else if(this.tipo=='2') {
      this.router.navigate(['/tabs/day']);
    }
  }

}
