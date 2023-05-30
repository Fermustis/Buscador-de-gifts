import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70">

            <img className="h-auto max-w-full rounded-lg" src={url} alt={title} />
            <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</p>
        </div>
    )
}
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}