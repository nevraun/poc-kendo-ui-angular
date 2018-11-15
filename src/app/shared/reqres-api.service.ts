import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
