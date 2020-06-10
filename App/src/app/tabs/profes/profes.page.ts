import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfesService } from './profes.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-profes',
  templateUrl: './profes.page.html',
  styleUrls: ['./profes.page.scss'],
})
export class ProfesPage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  insertForm = new FormGroup({
    username: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private profesService: ProfesService) { }

  ngOnInit() {
    if(this.tipo!='0') {
      this.router.navigate(['/tabs/day']);
    }
  }

  insert() {
    if (this.insertForm.valid) {
      const md5 = new Md5();
      const newForm = {
        username: this.insertForm.value.username,
        passwd: md5.appendStr(this.insertForm.value.passwd).end(),
        nombre: this.insertForm.value.nombre,
        apellidos: this.insertForm.value.apellidos,
        telefono: this.insertForm.value.telefono,
        email: this.insertForm.value.email
      };
      this.profesService.insertProf(newForm).subscribe();
      this.insertForm.reset();
    }
  }
}
