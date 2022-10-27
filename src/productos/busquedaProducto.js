import React from 'react'
const SearchBar = ()=>{
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Mostrar solo producto en stock
          </p>
        </form>
      );
    }

  export default SearchBar