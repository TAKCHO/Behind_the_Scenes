// 'use strict';

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

//  Hoisting

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
