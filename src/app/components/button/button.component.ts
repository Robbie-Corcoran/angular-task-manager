import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() 
  clicked = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }

}
