import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  readonly URL = 'http://localhost:1080/Proyecto_CI/index.php';
  tipo = localStorage.getItem('escuelavlc-tipo');
  userName = localStorage.getItem('escuelavlc-userName');

  constructor(public http: HttpClient) { }

  getClases() {
    const options = {
      observe: 'response' as 'body',
    };

    if(this.tipo == '1') {
      return this.http.get<HttpResponse<any>>(this.URL + '/getClasesProfesor/' + this.userName, options);
    } else {
      return this.http.get<HttpResponse<any>>(this.URL + '/getClasesAlumno/' + this.userName, options);
    }
  }
}
