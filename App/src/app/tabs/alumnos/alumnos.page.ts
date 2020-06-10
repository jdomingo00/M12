import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  alumnos = [];
  constructor(private router: Router, private alumnosService: AlumnosService) { }

  ngOnInit() {
    if(this.tipo!='0') {
      this.router.navigate(['/tabs/day']);
    }
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnosService.getAlumnos().subscribe( elem => {
      this.alumnos = elem.body;
      console.log(this.alumnos);
    });
  }

  verificar(alumno, i) {
    this.alumnosService.verificarAlumno(alumno).subscribe();
    this.alumnos.splice(i,1);
    console.log(this.alumnos);
  }
}
