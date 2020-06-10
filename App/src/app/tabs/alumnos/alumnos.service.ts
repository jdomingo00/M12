import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  readonly URL = 'http://localhost:1080/Proyecto_CI/index.php';

  constructor(public http: HttpClient) { }

  getAlumnos() {
    const options = {
      observe: 'response' as 'body',
    };

    return this.http.get<HttpResponse<any>>(this.URL + '/getAlumnosNoVerificados', options);
  }

  verificarAlumno(alumno) {
    const options = {
      observe: 'response' as 'body',
    };

    return this.http.post<HttpResponse<any>>(this.URL + '/verificarAlumno/' + alumno, options);
    console.log("verificado");
  }
}
