import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() calltoParents:EventEmitter <any> = new EventEmitter <any>();

  constructor() { }

  ngOnInit(): void {
    this.calltoParents.emit('xin chào parents');
  }

}
