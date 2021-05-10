import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handdleLogin(data){

    // gọi api qua node để login => nếu thành công => token

    // login thành công
    localStorage.setItem('token', '123456');

    //console.log('Login thành công');
  }

}
