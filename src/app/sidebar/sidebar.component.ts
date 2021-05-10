import { Component, OnInit } from '@angular/core';

// gọi api
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url_sidebar='http://localhost:3000/api/categories/ParentsChilds';

  sidebar;

  ngOnInit(): void {
    this.http.get(this.url_sidebar).subscribe((kq)=>{
      this.sidebar = kq['data'];
      //console.log(this.sidebar);
    })
  }

}
