import { Component, OnInit } from '@angular/core';

// gọi 3 thư viện để xử lý form
import { FormControl, FormGroup, Validators } from '@angular/forms';

// gọi service
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit(): void {
  }

  userData={
    name: 'abc',
    email: 'abc@gmail.com',
    pass: '123456',
    address: 'abc'
  }

  handdleRegister(data)
  {
    console.log(data);

    // this.service
    // .register(data.name, data.username, data.password, data.email)
    // .subscribe((kq)=>{
    //   console.log(kq)
    // })
  }

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
  })

  pullRegister()
  {
    console.log(this.registerForm.value);
  }

  get email(){ return this.registerForm.get('email') }
  get password(){ return this.registerForm.get('password') }
  get address(){ return this.registerForm.get('address') }

}
