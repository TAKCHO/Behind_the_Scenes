// 'use strict';

function calcAge(birthyear) {
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
