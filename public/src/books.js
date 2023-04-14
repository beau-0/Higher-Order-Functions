function findAuthorById(authors, id) {
  let author = authors.find(author => author.id === id);
  return author;
}

function findBookById(books, id) {
  const author = books.find(book => book.id === id);
  return author;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter(book => book.borrows[0].returned === false);
  const available = books.filter(book => book.borrows[0].returned === true);

  const availabilityStatus = [checkedOut, available];
  return availabilityStatus;
}

function getBorrowersForBook(book, accounts) {
  
const bookId = book.id;
const borrowers = [];
  
book.borrows.forEach (borrow => {
  if (borrowers.length === 10) return;
  const accountMatch = accounts.find(account => account.id === borrow.id);
  accountMatch['returned'] = borrow.returned;
  borrowers.push(accountMatch);
})
  return borrowers;
}  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};