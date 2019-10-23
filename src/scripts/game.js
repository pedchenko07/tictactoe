import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { getDataAttribute } from './utils';

const field = document.querySelector('.field');

fromEvent(field, 'click')
  .pipe(
    map(({ target }) => target),
    map((target) => getDataAttribute(target, 'id'))
  )
  .subscribe(console.log);
