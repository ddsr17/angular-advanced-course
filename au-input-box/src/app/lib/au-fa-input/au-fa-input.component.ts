import {
  Component,
  Input,
  ContentChild,
  AfterContentInit,
  HostBinding
} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";


@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['../common/au-input-box.css', './au-fa-input.component.css']
})
export class FontAwesomeInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error("the au-fa-input needs an input inside its content");
    }
  }

  get classes() {

    const cssClasses = {
      'fa': true,
      'icon': true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }


  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }


}
