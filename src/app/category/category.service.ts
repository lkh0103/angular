import { Injectable } from '@angular/core';

// gọi api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/api/';

  inforCategory(id)
  {
    var api='categories/inforCateogry/';
    return this.http.get(this.url + api + id);
  }

  allProduct(name)
  {
    var api='categories/allProduct/';
    return this.http.get(this.url + api + name);
  }

}
