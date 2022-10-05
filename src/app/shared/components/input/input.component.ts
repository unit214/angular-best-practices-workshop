import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})

export class InputComponent {
  @Input('type') type: string = 'text';
  @Input('name') name?: string;
  @Input('placeholder') placeholder?: string;
}
