import { createContext, useState } from 'react';

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    {id: 0, title: 'the way of kings'},
    {id: 1, title: 'the name of the wind'},
    {id: 2, title: 'the final empire'},
  ])

  return(
    <BookContext.Provider value={{books, setBooks}}>
      {props.children}
    </BookContext.Provider>
  );
}