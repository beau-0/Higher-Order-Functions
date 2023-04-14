function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  accounts.sort((a, b) => {
    if (a.name.last < b.name.last) return -1;
    if (a.name.last > b.name.last) return 1;
    if  (a.name.last = b.name.last) return 0;
    })
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const userID = account.id;
  numberOfBorrows = 0;
  
  books.forEach(book =>{
  book.borrows.forEach(borrow => {
    if (borrow.id === userID) numberOfBorrows++;  
     })
})
return numberOfBorrows; 
}

function getBooksPossessedByAccount(account, books, authors) {
  const userID = account.id;
  checkedOut = [];
  
let booksOut = books.forEach(book =>{
  book.borrows.forEach(borrow => {
    if (borrow.id === userID && borrow.returned === false) {
     checkedOut.push(book);
    }
  });
});
  
const booksOutWithAuthor = checkedOut.map(book => {
  const author = authors.find(author => book.authorId === author.id);
  return {...book, author};  
  })

return booksOutWithAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
