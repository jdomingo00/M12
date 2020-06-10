import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.container.html',
  styleUrls: ['./contacto.container.css']
})
export class ContactoContainer implements OnInit {

  contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    motivo: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),

  });
  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
