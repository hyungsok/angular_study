/**
 * webstorm에서  new > javascript 로 만든후 결과를 출력시에는 console.log를 사용하시오.
 */

// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title            price    author order
//--------------------------------------
//콩쥐팥쥐       20000    미상   1
//흥부놀부       25000    미상   2
//자바의정석     35000    정석   3
//안드로이드정복  15000    김상형  4

var books = [
  {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
  {title: "흥부놀부", price: 25000, author: "미상", order: 2},
  {title: "자바의정석", price: 35000, author: "정석", order: 3},
  {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?
// type check
function _dataType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

console.log('2번: ', _dataType(books)); // array

/*
- Call by Value (원시 데이터, 복사)
: String, Number, Boolean, Null, Undefined

- Call by Reference (복합 데이터, 참조)
: array, objcet, function
*/

const jsTypes = `
  - Call by Value (원시 데이터, 복사)
  : string, number, boolean, null, undefined

  - Call by Reference (복합 데이터, 참조)
  : array, objcet, function

  8가지.
`;

console.log('2번: ', jsTypes);

//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)
books.unshift({
  title: '이것이자바다',
  price: 40000,
  author: '김상형',
  order: 5
});

console.log('3번: ', books);

//4. 맨 앞쪽에 추가한것을 지우시오,
books.shift();
console.log('4번: ', books);

// 5. 맨 뒷쪽에 추가하시오. (힌트: push)
books.push({
  title: 'arrayPush',
  price: 10000,
  author: 'javascript',
  order: 5
});

console.log('5번: ', books);

// 6. 맨 뒤쪽에 추가한것을 지우시오,
books.pop();
console.log('6번: ', books);

// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice)
const item = {
  title: 'arraySplice',
  price: 10000,
  author: 'javascript',
  order: 7
}
books.splice(2, 0, item);
console.log('7번: ', books);

// 8. 방금 삽입한거를 삭제하시오.
books.splice(2, 1);
console.log('8번: ', books);

// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)
books.forEach(book => {
  if (book.title === '자바의정석') book.author = '남궁성';
});
console.log('9번: ', books);

// 10. 책의 총 비용을 출력하시오
let bookPrice = 0;
books.map(book => {
  bookPrice += book.price;
});
console.log('10번: ', bookPrice);

// 11. 제목앞에 판매순위를 등수를 붙인("콩쥐팥쥐" => "1등 콩쥐팥쥐") 새로운 배열을 생성 하시오.(힌트: map)
// 이때, 기존 배열과 비교시 값이 같은가? 다른가?
const rankBookList = [];
books.map((book, index) => {
  let result = `${index + 1}등 ${book.title}`;
  return rankBookList.push(result);
});
console.log('11번: ', rankBookList);
console.log('11번: ', books);

// 12. 3등안에 있는것만 걸러서 별도의 배열을 만드시오 (힌트: filter)
const filterBookList = books.filter(book => book.order < 4);
console.log('12번: ', filterBookList);
