import { Injectable } from '@angular/core';

// gọi api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/api/';

  newhome()
  {
    var api='products/newhome';
    return this.http.get(this.url + api);
  }

}
