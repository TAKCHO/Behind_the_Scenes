'use strict';

function calcAge(birthyear) {
  const age = 2022 - birthyear;
  //   console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthyear}`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Tako';
calcAge(1997);
