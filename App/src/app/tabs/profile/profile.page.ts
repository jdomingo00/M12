import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  tipo = localStorage.getItem('escuelavlc-tipo');
  edit = false;
  logout = false;
  datos = '';
  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    if(this.tipo=='0') {
      this.router.navigate(['/tabs/alumnos']);
    }
    this.logout = false;
    this.getDatos();
  }

  getDatos() {
    this.profileService.getData().subscribe( elem => {
      this.datos = elem.body;
    });
  }

  goEdit() {
    this.edit=!this.edit;
  }

  onLogout() {
    this.logout = true;
  }

  noLogout() {
    this.logout = false;
  }

  editDatos(event) {
    this.profileService.editData(event).subscribe( elem => {
      if(elem.ok) {
        this.getDatos();
        this.goEdit();
      }
    });
  }
}
