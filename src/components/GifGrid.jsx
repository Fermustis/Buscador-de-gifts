import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Proptypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-center text-xs sm:text-sm xl:text-2xl uppercase p-3">{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-4 m-5">
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: Proptypes.string.isRequired,
};
