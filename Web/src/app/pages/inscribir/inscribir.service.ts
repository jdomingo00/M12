import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscribirService {

  readonly URL = 'http://localhost:1080/Proyecto_CI/index.php';

  constructor(public http: HttpClient) { }

  insertAlumn(datos) {
    const options = {
      observe: 'response' as 'body',
    };

    return this.http.post<HttpResponse<any>>(this.URL + '/insertAlumno/', {datos}, options);
  }
}
