import { QuestionBase } from './question-base';

export class ConfirmationQuestion extends QuestionBase<string> {
  controlType = 'confirmation';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
