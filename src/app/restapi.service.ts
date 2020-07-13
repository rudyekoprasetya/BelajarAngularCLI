import { Injectable } from '@angular/core';
// import http client module di service 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(
    private http:HttpClient
  ) { }

  // get data dari json
    user() {
      // data json ada pada folder app 
      return this.http.get('./assets/data.json');
    }
}
