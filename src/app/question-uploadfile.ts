import { QuestionBase } from './question-base';

export class UploadQuestion extends QuestionBase<string> {
  controlType = 'file';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
