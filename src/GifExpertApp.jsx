import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Piece', 'One Punch' ]);
  
  const onAddCategory = () => {
    console.log('tu ta loco papi que pasa');
    setCategories([...categories, 'Valorant'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />
      <button onClick={onAddCategory}>Agregar</button>  
      <ol>
        {categories.map(category => {return <li key={category}> {category} </li>})}
      </ol>
    </>
  );

}
