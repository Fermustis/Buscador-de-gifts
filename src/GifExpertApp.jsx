import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (NuevaCategory) => {
        if (categories.includes(NuevaCategory)) return;// Si ya existe la categoria no la agrega
        setCategories([NuevaCategory, ...categories]);
        // setCategories(cats => [...cats, 'Bob Esponja']); // Otra forma de hacerlo
    }

    return (
        <>

            <h1>GifExpertApp</h1>

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
        </>
    )
}