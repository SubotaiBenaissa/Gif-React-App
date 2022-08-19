import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('One Piece');

    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        setCategories((categories) => [inputValue, ...categories])
    }

    return (

        <form onSubmit={((event) => onSubmit(event))}>
            <input 
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )

}
