import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly URL = 'http://localhost:1080/Proyecto_CI/index.php';
  userName = localStorage.getItem('escuelavlc-userName');

  constructor(public http: HttpClient) { }

  getAlumnos() {
    const options = {
      observe: 'response' as 'body',
    };

      return this.http.get<HttpResponse<any>>(this.URL + '/getListAlumnosProf/' + this.userName, options);
  }
}
