import { Invoice } from './classes/Invoice.js';

import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

/*
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('demo', 'webwork', 250);
docTwo = new Payment('kola', 'pumbwork', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('lugie', 'work on the lugie website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});
*/
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  //tubles in typescript
  let values : [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(...values )
  } else {
    doc = new Invoice(...values)
  }

  list.render(doc, type.value, 'end');
});
