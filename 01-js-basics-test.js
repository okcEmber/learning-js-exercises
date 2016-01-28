const test = require('tape');

// This is not a comprehensive view of javascript,
// just an intro to get your feet wet
//
//  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
//  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
//

test('javascript can do basic arithmatic', (t) => {
  // This is the nubmer of test we intended to have
  // in this given case
  t.plan(4);

  // Make the following tests pass by changing "WAT"
  // to the value that should result in the operation
  // on the left
  t.equal(4 + 5, 9, "Example of javascript adding.");
  t.equal(31 - 5, 26, "It can subtract!");
  t.equal(6 * 8, 48, "It can multiply!");
  t.equal((2 + 2) * 2 + 2 * 2, 12, "It can chain operations!");
});

test('javascript can do logic', (t) => {
  // This is the nubmer of test we intended to have
  // in this given case
  t.plan(7);

  // Make the following tests pass by changing "WAT"
  // to the value that should result in the operation
  // on the left
  t.equal(1 > 5, false, "It can do Greater than!");
  t.equal(1 < 5, true, "It can do Less than!");
  t.equal(99 >= 99, true, "It can do Greater than or equal to!");
  t.equal(7 === 5, false, "It can do equality!");
  t.equal(7 !== 5, true, "It can do inequality!");
  t.equal(true && true, true, "It can do logical and");
  t.equal(true || false, true, "It can do logical or!");
});


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
test('javascript has arrays', (t) => {
  t.equal([1, 2, 4].length, 3, "An array with three items has a lenght of three");

  const a = [1, 2, 4];
  t.equal(a[0], 1, "Arrays in javascript are indexed started with zero");
  t.equal(a.pop(), 4, "Arrays have useful methods that can be called on");
  t.equal(1,1, 'hi');

  t.end();
});


test('javascript has objects', (t) => {

  const book = {
    title: 'everybody poops',
    author: 'somebody',
    yearPublished: 1995,
    randoFunction: function() {
      return 3 + 5;
    }
  };

  t.equal(book.title, 'everybody poops', "You can access properties on an object");
  t.equal(book.yearPublished, 1995, "You can store any type of data on an object");
  t.equal(book.randoFunction(), 8, "Including a function");

  t.end();
});


