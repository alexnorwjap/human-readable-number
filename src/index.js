module.exports = function toReadable(number) {
  if (number === 0) return 'zero';
  let num = number;
  let result = '';
  const hundred = 'hundred';
  const space = ' ';

  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num >= 100) {
    result += ones[Math.floor(num / 100)] + space + hundred;
    num %= 100;
    if (num > 0) {
      result += space;
    }
  }
  if (num >= 20) {
    result += tens[Math.floor(num / 10)];
    if (num % 10 > 0) {
      result += space + ones[num % 10];
    }
  } else {
    result += ones[num];
  }

  return result;
};
