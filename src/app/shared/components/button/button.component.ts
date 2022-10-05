import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(event);
  }

}
