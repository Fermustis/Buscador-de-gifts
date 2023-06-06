import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
    return (
        <div className="max-w-sm bg-paleta1-500 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70">
            <div>
                <img className="h-auto max-w-full rounded-lg" src={url} alt={title} />
            </div>
            <div className="align-bottom max-h-56">
                <p className="mb-2 text-2xl font-bold  text-center tracking-tight text-gray-900 dark:text-white">{title}</p>
            </div>
        </div>
    );
};
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
