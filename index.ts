// Build a Mortgage Claculator using Rxjs and calculateMortgage method
import { fromEvent, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { calculateMortgage } from './calculate';

const loanAmount = document.getElementById('loanAmount');
const loanInterest = document.getElementById('loanInterest');
const loanLength = document.getElementById('loanLength');
const result = document.getElementById('result');

const amount$ = fromEvent(loanAmount, 'input').pipe(
  map(v => (v.target as HTMLInputElement).value)
);

const interest$ = fromEvent(loanInterest, 'input').pipe(
  map(v => (v.target as HTMLInputElement).value)
);

const length$ = fromEvent(loanLength, 'change').pipe(
  map(v => (v.target as HTMLOptionElement).value)
);

combineLatest([amount$, interest$, length$]).subscribe(arr => {
  result.innerHTML = calculateMortgage(...arr);
});
