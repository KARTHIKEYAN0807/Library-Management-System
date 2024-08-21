import React, { useState } from 'react';
import BookForm from './BookForm';

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editingBook) {
      updateBook({ ...editingBook, ...values });
    } else {
      addBook(values);
    }
    resetForm();
  };

  return (
    <div>
      <h2>Books Management</h2>
      <BookForm
        onSubmit={handleSubmit}
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
      />
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => setEditingBook(book)}>Edit</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksPage;
