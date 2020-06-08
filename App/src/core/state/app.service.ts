import { Injectable } from '@angular/core';
import { AppApi } from './app.api';
import { AppAction } from './app.actions';
import { AppQuery } from './app.query';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private api: AppApi,
    private action: AppAction,
    private query: AppQuery
  ) { }

  updateUser(user) {
    this.action.updateUser(user);
  }

  login(user) {
    this.api.login(user).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        localStorage.setItem('userName', user.userName);
        localStorage.setItem('tipo', user.tipo);
      }
    });
  }
  logout() {
    let userName = '';
    this.query.selectUser().subscribe(user => {
      userName = user.userName;
    });
    this.api.logout(userName).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        localStorage.removeItem('userName');
        localStorage.removeItem('tipo');
      }
    });
  }

  register(user) {
    const data = this.getTipoAndUname();
    this.api.register(user, data).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        
      }
    });
  }

  getTipoAndUname() {
    const data = { tipo: '', userName: '' };
    this.query.selectUser().subscribe(user => {
      data.tipo = user.tipo;
    });
    this.query.selectUser().subscribe(user => {
      data.userName = user.userName;
    });
    return data;
  }
}
