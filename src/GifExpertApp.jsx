import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Piece', 'One Punch' ]);
  
  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        //setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />
  
      <ol>
        {categories.map(category => {return (
          <div key={category}>
            <li> {category} </li>
          </div>
        )})}
      </ol>
    </>
  );

}
