import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { CheckboxQuestion } from './question-checkbox';
import { RadioQuestion } from './question-radioBtns';
import { AutocompleteQuestion } from './question-autocomplete';
import { ConfirmationQuestion } from './question-confirmation';
import { UploadQuestion } from './question-uploadfile';
import { TextAreaQuestion } from './question-textarea';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 0
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'telephone',
        label: 'Telephone',
        type: 'tel',
        order: 3
      }),

      new CheckboxQuestion({
        key: 'statut',
        label: 'Statut',
        type: 'checkbox',
        order: 4
      }),
      new RadioQuestion({
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'Male',  value: 'm'},
          {key: 'Female',  value: 'f'}
        ],
        required: true,
        order: 5
      }),

      new AutocompleteQuestion({
        key: 'talent',
        label: 'Talent',
        type:'search',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'greatest',  value: 'Greatest'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 6
      }),

      
      // new ConfirmationQuestion({
      //   key: 'confirmation',
      //   label: 'Mot de passe',
      //   type:'text',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'greatest',  value: 'Greatest'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 7
      // }),

      new UploadQuestion({
        key: 'cv',
        label: 'Your CV',
        type:'file',
        order: 8
      }),

      new TextAreaQuestion({
        key: 'textarea',
        label: 'Commentaire',
        type:'textarea',
        row: 10,
        col:25,
        order: 9
      })


    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
