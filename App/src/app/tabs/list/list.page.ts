import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  alumnos = [];
  constructor(private router: Router, private listService: ListService) { }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
    else if(this.tipo=='2') {
      this.router.navigate(['/tabs/day']);
    }

    this.listService.getAlumnos().subscribe( elem => {
      this.alumnos = elem.body;
    });
  }

}
