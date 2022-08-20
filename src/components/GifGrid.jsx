import React from 'react'

const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z17ChE66u2ETx3anla1vUuTFotlwfDvV&q=${ category }&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}

export const GifGrid = ({ category }) => {

    getGifs(category);

    return (
        <>
        
            <h3>{ category }</h3>

        </>
    )

}
