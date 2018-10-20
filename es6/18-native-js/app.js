// * significa tudo da biblioteca ramda
// R alias
// from biblioteca/module
//import * as R from 'ramda';

import { union as juntaTudo,  map as itMap } from 'ramda';
//import sum, { sub, multiplicacao, div as divisao } from './utils.js';

import Calculator from './utils.js';

let calc = new Calculator();

const arr = [1,2,3,4];
const arr2 = [1,1,1,3,3,4];

const lambda = x => x * 2

console.log(juntaTudo(arr, arr2));
console.log(itMap(lambda, arr));

// console.log(sum(4, 18));
// console.log(sub(4, 18));
// console.log(multiplicacao(4, 18));
// console.log(divisao(4, 18));
console.log(calc.sum(4, 50));
console.log(calc.sub(4, 18));
console.log(calc.div(4, 18));
console.log(calc.mult(4, 18));


