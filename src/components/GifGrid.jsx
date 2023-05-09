import { useEffect, useState } from 'react';
import { getGifs } from '../Helpers/getGifs';



export const GifGrid = ({ category }) => {

    const [Images, setImages] = useState([]); // El estado inicial es un arreglo vacio [

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {// Se ejecuta cuando el componente es renderizado por primera vez, no acepta async no se puede hacer un useEffect asincrono
        getImages();

    }, []); // El segundo argumento es un arreglo de dependencias, si esta vacio se ejecuta una sola vez, si tiene algo se ejecuta cada vez que cambia el valor de lo que esta en el arreglo

    return (
        <>
            <h3>{category}</h3>

            <ol>
                {

                    Images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>


        </>

    )

};