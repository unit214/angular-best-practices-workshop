import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
})
export class HeadingComponent {
  @Input('title') title?: string;
  @Input('sub-title') subTitle?: string;
}
