import { Component, OnInit } from '@angular/core';

// gọi api
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url_menuTop='http://localhost:3000/api/menu/menuTop';
  menuTop;

  ngOnInit(): void {
    this.http.get(this.url_menuTop).subscribe((kq)=>{
      this.menuTop = kq['data'];
      //console.log(this.menuTop);
    })
  }

  search(s){
    console.log(s.value);
  }

}
