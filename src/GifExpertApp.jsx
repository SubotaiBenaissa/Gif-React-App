import { useState } from 'react';
import React from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Piece', 'One Punch' ]);
  
  const onAddCategory = () => {

  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <button>Agregar</button>  
      <ol>
        {categories.map(category => {return <li key={category}> {category} </li>})}
      </ol>
    </>
  )

}
