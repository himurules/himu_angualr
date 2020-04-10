import { InjectionToken} from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');
export const lookupLists = {
  categories: ['Fiction', 'Reality', 'Drama', 'Science'],
  ratings: {1: 'Poor', 2: 'Readable', 3: 'Interesting', 4: 'Good', 5: 'Exceptional'},
}

