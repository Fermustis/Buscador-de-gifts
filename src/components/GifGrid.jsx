import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Proptypes from 'prop-types';



export const GifGrid = ({ category }) => {


    const { images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    images.map((image) => (

                        <GifItem key={image.id}
                            {...image}
                        />
                    ))

                }
            </div>


        </>

    )

};
GifGrid.propTypes = {
    category: Proptypes.string.isRequired
}