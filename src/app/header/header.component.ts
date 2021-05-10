import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // lấy dữ liệu từ parents
  //@Input() title;

  constructor() { }

  ngOnInit(): void {

    //console.log( this.title );

  }

}
