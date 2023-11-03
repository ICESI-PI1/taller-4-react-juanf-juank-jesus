import React, { useState } from 'react';
import '../styles/BooksPage.css';  

const BooksPage = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Cien años de soledad', publicationDate: '1967-06-05', author: { id: 1, name: 'Gabriel García Márquez' } },
    { id: 2, title: 'Conversación en la Catedral', publicationDate: '1969-10-15', author: { id: 2, name: 'Mario Vargas Llosa' } },
    // ... puedes agregar más libros de ejemplo si lo deseas
  ]);

  const [filterId, setFilterId] = useState("");

  const filteredBooks = filterId ? books.filter(book => book.author.id === parseInt(filterId, 10)) : books;

  return (
    <div className="container">
      <h1>Libros</h1>
      
      <div className="filter-section">
        <label htmlFor="authorId">Filtrar por ID de Autor: </label>
        <input 
          id="authorId"
          type="number"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
          placeholder="Ingresa ID de Autor"
        />
      </div>

      <button className="btn-add">Agregar Libro</button>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha de Publicación</th>
            <th>Autor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.publicationDate}</td>
              <td>{book.author.name}</td>
              <td>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksPage;