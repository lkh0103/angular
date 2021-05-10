import { Injectable } from '@angular/core';

// gọi api
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/api/';

  register(name, username, password, email)
  {
    // cài đặt header
    let option = {
      headers: new HttpHeaders().set("Content-Type", 
      "application/x-www-form-urlencoded")
    }

    let body = new URLSearchParams();
    
    // khai báo body
    body.set('name', name);
    body.set('username', username);
    body.set('password', password);
    body.set('email', email);
    //body.set('phone', phone);

    let api = 'users/register';

    return this.http.post(this.url + api, body.toString(), option);
  }


}
