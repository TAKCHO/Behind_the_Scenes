'use strict';

/* function calcAge(birthyear) {
  const age = 2022 - birthyear;
  //   console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1997) {
      var millenial = true;
      //   creating New variable with th same name as outer scope's variable
      const firstName = 'John';

      //   Reassigning outer scope's varible
      const output = 'NEW OUTPUT!';
      const str = `oh, you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(add(2, 3)); // works with no strict mode
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Tako';
calcAge(1997);
 */

/* //  Hoisting

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Tako';
let job = 'teacher';
const year = 1997;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
 */

// The This keyword in practise

// console.log(this);
/* 
const calcAge = function (birthyear) {
  console.log(2022 - birthyear);
  //   console.log(this); // will not work with strict mode
};

calcAge(1997);

const calcAgeArrow = birthyear => {
  console.log(2022 - birthyear);
  //   console.log(this);
};

calcAgeArrow(1996);

const tako = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

tako.calcAge();

// example

const matilda = {
  year: 2017,
};

matilda.calcAge = tako.calcAge; // method borrowing / copying method
matilda.calcAge();

const f = tako.calcAge;
f();
 */

// var firstName = 'Matilda';

/* const tako = {
  firstName: 'Tako',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    /* // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1997);
    };
    // console.log(this.year >= 1981 && this.year <= 1997);
    // }; */

/*     // Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1997);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
tako.greet();
tako.calcAge();
 */

/* Primitives vs Objects */

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'tako',
  age: 25,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('me', me);
 */

//Primitaive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('after marriage', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('after marriage', jessicaCopy);
