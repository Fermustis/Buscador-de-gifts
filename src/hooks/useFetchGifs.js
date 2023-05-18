import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";


export const useFetchGifs = (category) => {

 const [images, setImages] = useState([]); // El estado inicial es un arreglo vacio [
 const [loading, setLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }

    useEffect(() => {// Se ejecuta cuando el componente es renderizado por primera vez, no acepta async no se puede hacer un useEffect asincrono
        getImages();

    }, []); // El segundo argumento es un arreglo de dependencias, si esta vacio se ejecuta una sola vez, si tiene algo se ejecuta cada vez que cambia el valor de lo que esta en el arreglo




    return {
        images,
        loading,
  }
}
