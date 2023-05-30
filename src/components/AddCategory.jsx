import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(cats => [inputValue, ...cats]);

        onNewCategory(inputValue.trim());

        setInputValue('');

    }
    return (
        <>
            <form onSubmit={(e) => onSubmit(e)} aria-label="form">

                {/* Input */}
                <input className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Buscar gift" value={inputValue} onChange={onInputChange} />

                <hr />
            </form>
        </>
    )
}
AddCategory
    .propTypes = {
    onNewCategory: PropTypes.func.isRequired
}