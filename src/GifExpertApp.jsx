import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cuyos']);

    const onAddCategory = (NuevaCategory) => {
        if (categories.includes(NuevaCategory)) return;// Si ya existe la categoria no la agrega
        setCategories([NuevaCategory, ...categories]);
        // setCategories(cats => [...cats, 'Bob Esponja']); // Otra forma de hacerlo
    }

    return (
        <>
            <div className="bg-blue-900">

                <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  start-px'>Buscador de Gifts</h1>

                <AddCategory
                    //    setCategories={setCategories}
                    onNewCategory={onAddCategory}
                />



                {categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}



                <hr />
            </div>
        </>
    )
}