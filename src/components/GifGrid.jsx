import React from 'react';
//import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    /*const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => { 
        getImages();
    }, [])*/  //Esto lo hago en un hook personalizado

    const { images, isLoading } = useFetchGifs(category);
   
    return (
        <>
        
            <h3>{ category }</h3>

            <div className='card-grid'>
            {
                /*images.map( (img) => (
                        <li key={img.id}>
                            {img.title}
                        </li>
                ))*/

                /*images.map( ({ id, title, url }) => (
                    <GifItem key={ id } title={ title } url={ url }/>
                ))*/

                images.map( (imgs) => (
                    <GifItem key={imgs.id} {...imgs}/>  
                    // Se usa el operador spread para mandar los atributos del array images directamente, ya que este contiene a title y url
                ))
            }
            </div>
        </>
    )

}
