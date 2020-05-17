import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class AppApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://localhost:1080/Proyecto_CI/index.php';

  constructor(public http: HttpClient) { }

  login(user: User) {
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, user);

    const options = {
      observe: 'response' as 'body',
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/login', options);
  }

  logout(token: string, uname: string) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/logoutAdmin', { uname }, options);
  }

  register(user, data) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + data.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/registerAdmin', { user, admin: data.uname }, options);
  }
  appendQueryParams(queryParams, filterParams) {
    for (const [key, value] of Object.entries(filterParams)) {
      if (value) {
        queryParams = queryParams.append(key, value);
      }
    }
    return queryParams;
  }
}