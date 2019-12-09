import { Injectable }       from '@angular/core';

import { NavigationBase } from './navigation-base';

@Injectable()
export class NavigationService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getNavigations() {

    let navigations: NavigationBase<any>[] = [

    //   new DropdownQuestion({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 0
    //   })  

    ];

    return navigations.sort((a, b) => a.order - b.order);
  }
}
