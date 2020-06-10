import { Component, OnInit } from '@angular/core';
import { InscribirService } from './inscribir.service';
import { Md5 } from 'ts-md5/dist/md5';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscribir',
  templateUrl: './inscribir.container.html',
  styleUrls: ['./inscribir.container.css']
})
export class InscribirContainer implements OnInit {

  insertForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private inscribirService: InscribirService) { }

  ngOnInit(): void {
  }

  insert() {
    console.log('1');
    if (this.insertForm.valid) {
      console.log('2');
      const md5 = new Md5();
      const newForm = {
        nombre: this.insertForm.value.nombre,
        apellidos: this.insertForm.value.apellidos,
        username: this.insertForm.value.username,
        passwd: md5.appendStr(this.insertForm.value.passwd).end(),
        telefono: this.insertForm.value.telefono,
        email: this.insertForm.value.email
      };
      this.inscribirService.insertAlumn(newForm).subscribe();
      this.insertForm.reset();
    }
  }

}
