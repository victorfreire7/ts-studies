// sub tipos
// assertions / type assertions
// converção de um tipo para outro

const body1 = document.querySelector('body'); // HTMLBodyElement | null
if (body1) body1.style.background = 'red';

// Non-null assertion - ! - informo que o item nao pode ser nulo
const body2 = document.querySelector('body')!; // HTMLBodyElement
body2.style.background = 'red';

// Type Assertion - informo o tipo especfico (aconselhavel, nesta ocasiao);
const body3 = document.querySelector('body') as HTMLBodyElement;  // HTMLBodyElement
body3.style.background = 'red';

// type assertion brusca

const body4 = (document.querySelector('body') as unknown) as number;  // HTMLBodyElement
console.log(body4) // const body4: number

