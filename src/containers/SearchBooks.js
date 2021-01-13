import React from 'react';

const SearchBooks = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="form-inline justify-content-center">
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Titre du Livre"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control ml-3"
                placeholder="Auteur"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">Ajouter un livre</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default SearchBooks;
