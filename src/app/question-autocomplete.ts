import { QuestionBase } from './question-base';

export class AutocompleteQuestion extends QuestionBase<string> {
  controlType = 'autocomplete';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

    displayFn(typedKey?: any): string | undefined {
    return typedKey ? typedKey.key : undefined;
  }

  private _filter(typedkey: string): any[] {
    const filterValue = typedkey.toLowerCase();

    return this.options.filter(option => option.key.toLowerCase().indexOf(filterValue) === 0);
  }
}
