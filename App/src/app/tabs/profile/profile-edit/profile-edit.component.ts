import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit, OnChanges {

  @Input() datos;
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelar: EventEmitter<any> = new EventEmitter<any>();

  editForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes:SimpleChanges) {
    if(changes.datos) {
      this.editForm.patchValue({
        nombre: this.datos.nombre,
        apellidos: this.datos.apellidos,
        telefono: this.datos.telefono,
        email: this.datos.email
      });
    }
  }

  onGuardar() {
    if(this.editForm.valid) {
      this.edit.emit(this.editForm.value);
    }
  }

  onCancel() {
    this.cancelar.emit();
  }

}
