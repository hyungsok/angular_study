var book = {title: "자바의 정석", price: 20000, author: "정석", order: 1};

// es5
var temp_es5 = Object.assign({}, book, {title: "1등" + book.title});
console.log(book);
console.log(temp_es5);

// es6
var temp_es6 = {...book, book, title: "1등" + book.title};
console.log(temp_es6);
