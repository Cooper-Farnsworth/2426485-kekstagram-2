console.log('первое задание');

console.log(checkString1('testString', 20)); // вызов декларативной функции можно ставить свободно

// декларативная функция
function checkString1(inputString, maxLength) {
  // if (inputString.length <= maxLength) {
  //   return true;
  // } else {
  //   return false;
  // }

  // return inputString.length <= maxLength ? true : false;

  return inputString.length <= maxLength;
}

// функциональное выражение (в случае стрелочной функции)
const checkString2 = (inputString, maxLength) => inputString.length <= maxLength;

console.log(checkString2('testString', 5)); // вызов функционального выражения под инициализацией


console.log('второе задание');

const checkPalindrom = (inputString) => {
  const sourceString = inputString.toUpperCase().replaceAll(' ', '');
  const reversedString = sourceString.split('').reverse().join('');
  return sourceString === reversedString;
};

const checkPalindrom2 = (inputString) => {
  const sourceString = inputString.toUpperCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = sourceString.length - 1; i >= 0; i--) {
    reversedString += sourceString[i];
  }
  return reversedString === sourceString;
};

console.log(checkPalindrom('топот'));
console.log(checkPalindrom('словечко'));
console.log(checkPalindrom('Лёша на полке клопа нашёл '));


console.log(checkPalindrom2('топот'));
console.log(checkPalindrom2('словечко'));
console.log(checkPalindrom2('Лёша на полке клопа нашёл '));


console.log('третье задание');


const getNumbers = (inputString) => {
  console.log(inputString);
  const sourceString = String(inputString).replaceAll(' ', '');
    console.log(parseInt(sourceString));
  let numbersString = '';
  for (let i = 0; i <= sourceString.length; i++) {
    const temp = parseInt(sourceString[i], 10);
    if (!isNaN(temp)) {
      numbersString += temp;
    }
  }
  return parseInt(numbersString, 10);
};

console.log(getNumbers('2023 год'));            // 2023
console.log(getNumbers('ECMAScript 2022'));     // 2022
console.log(getNumbers('1 кефир, 0.5 батона')); // 105
console.log(getNumbers('агент 007'));           // 7
console.log(getNumbers('а я томат'));           // NaN

console.log(getNumbers(2023));            // 2023

console.log(getNumbers());
