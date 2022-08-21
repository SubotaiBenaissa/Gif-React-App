import React from 'react';
import { getGifs } from '../helpers/getGifs';
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => { 
        getImages();
    }, [])
   
    return (
        <>
        
            <h3>{ category }</h3>

            <ol >
            {
                /*images.map( (img) => (
                        <li key={img.id}>
                            {img.title}
                        </li>
                ))*/
                images.map( ({ id, title }) => (
                    <li key={ id }>
                        { title }
                    </li>
                ))
            }
            </ol>
        </>
    )

}
