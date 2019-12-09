import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { IconBase }     from './dynamic-icon-svg-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicIconSVGComponent {
  @Input() question: IconBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
}
