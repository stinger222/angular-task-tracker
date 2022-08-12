import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() bg: string
  @Output() btnClcik = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClcik.emit()
  }
}