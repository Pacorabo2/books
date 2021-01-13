import React from 'react';

const SearchBooks = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre à rechercher sur Google API</p>

          <form className="form-inline justify-content-center">
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Quoi rechercher ?"
                required
              />
            </div>
            <div className="form-group">
              <button 
                className="btn btn-outline-secondary ml-3"
              >Rechercher</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default SearchBooks;
