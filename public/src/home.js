//this is the helper function.. used in getBooksBorrowedCount
function isBookOut(book){    
  return book.borrows.some(borrow => borrow.returned === false);    
}  

function totalRentsPerBook(books) {
const mostPopularBooks = [];
  
for (let book in books){
const rents = books[book].borrows.length;      
const bookObject = {name: books[book].title, count: rents};
mostPopularBooks.push(bookObject);
}
return mostPopularBooks;
}

function getTotalBooksCount(books) {return books.length;}

function getTotalAccountsCount(accounts) {return accounts.length;}

function getBooksBorrowedCount(books) {
  let booksOut = 0;
  books.forEach(book => {
    if (isBookOut(book)) booksOut++;
  })
  console.log(booksOut);
  return booksOut;
}
  
function getMostCommonGenres(books) {
const genreTotals = [];
  
const totalCounts = books.reduce((genreCounter, book) => {
  const genre = book.genre;
  if (genreCounter[genre] == null) genreCounter[genre] = 0;
  genreCounter[genre]++;
  return genreCounter;
}, {});
  
  for(let genre in totalCounts){
    const genreObject = {};
    genreObject['name'] = genre;
    genreObject['count'] = totalCounts[genre];
    genreTotals.push(genreObject);
  }
  
genreTotals.sort((genreA, genreB) =>  genreA.count > genreB.count ? -1 : 1);
return genreTotals.splice(0,5);
}

function getMostPopularBooks(books) {
const mostPopularBooks = totalRentsPerBook(books);
  
mostPopularBooks.sort((bookA, bookB) =>  bookA.count > bookB.count ? -1 : 1);
return mostPopularBooks.splice(0,5);
}

function getMostPopularAuthors(books, authors) {

  const rents = books.reduce((booksByAuthor, book) => {
    const authorId = book.authorId;
    const {name} = authors.find(author => author.id === authorId);
    const fullName = `${name.first} ${name.last}`;

    booksByAuthor[fullName] = booksByAuthor[fullName] || 0;
    booksByAuthor[fullName] += book.borrows.length;
    return booksByAuthor;
  }, {})  

const authorPopularity = [];
for (author in rents){
  authorPopularity.push({['name']: author, ['count']: rents[author]});
}

authorPopularity.sort((authorA, authorB) => authorA.count > authorB.count ? -1:1);
  return authorPopularity.splice(0, 5);
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};