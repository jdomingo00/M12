import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profes',
  templateUrl: './profes.page.html',
  styleUrls: ['./profes.page.scss'],
})
export class ProfesPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.tipo!='0') {
      this.router.navigate(['/tabs/day']);
    }
  }

}
