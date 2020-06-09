import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  readonly URL = 'http://localhost:1080/Proyecto_CI/index.php';

  constructor(public http: HttpClient) { }

  getClases() {
    const options = {
      observe: 'response' as 'body',
    };

    return this.http.get<HttpResponse<any>>(this.URL + '/getTipoClases', options);
  }
}
