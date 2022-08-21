import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {   // Por alguna razón que no entiendo debo mandar la prop category sin des-estructurar porque no es lo mismo xd 

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
        // console.log(category)
    }

    useEffect( () => { 
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}
