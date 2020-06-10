import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const md5 = new Md5();
      const pswdCifrada = md5.appendStr(this.loginForm.value.passwd).end();

      this.loginService.login(this.loginForm.value.userName, pswdCifrada).subscribe(elem => {
        if (elem.ok) {
          localStorage.setItem('escuelavlc-userName', this.loginForm.value.userName);
          localStorage.setItem('escuelavlc-passwd', pswdCifrada.toString());
          localStorage.setItem('escuelavlc-tipo', elem.body);
          switch(elem.body) {
            case '0':
              this.router.navigate(['/tabs/alumnos']);
              break;
            default:
              this.router.navigate(['/tabs/day']);
              break;
          }
        }
      });
    }
  }

}
