import { Component, OnInit } from '@angular/core';

// gọi socket io
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: Socket) {
    this.get_message().subscribe(data=>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  get_message()
  {
    return Observable.create((observable)=>{
      this.socket.on('server', (data)=>{
        observable.next(data);
      })
    })
  }

  send()
  {
    this.socket.emit('message', 1);
  }

}
