import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const addAuthor = (author) => {
    setAuthors([...authors, { id: Date.now(), ...author }]);
  };

  const updateAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    setEditingAuthor(null);
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editingAuthor) {
      updateAuthor({ ...editingAuthor, ...values });
    } else {
      addAuthor(values);
    }
    resetForm();
  };

  return (
    <div>
      <h2>Authors Management</h2>
      <AuthorForm
        onSubmit={handleSubmit}
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
      />
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.birthDate}</td>
              <td>{author.biography}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => setEditingAuthor(author)}>Edit</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteAuthor(author.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorsPage;
