import { Component, OnInit } from '@angular/core';

// gọi service home
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  infoproduct;

  ngOnInit(): void {
    this.service.newhome().subscribe((kq)=>{
      this.infoproduct = kq['data'];
    })

    //console.log(localStorage.getItem('token'));
  }

}
