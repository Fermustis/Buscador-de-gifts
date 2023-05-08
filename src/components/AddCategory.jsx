import { useState } from "react"

export const AddCategory = ({onNewCategory}) => { 

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => { 
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

       // setCategories(cats => [inputValue, ...cats]);
        
        onNewCategory(inputValue.trim());
        setInputValue('');
         
    }
    return (
        <>
            <form onSubmit={(e)=> onSubmit(e)}>

            {/* Input */}
            <input type="text" placeholder="Buscar gift" value={inputValue} onChange={onInputChange}/>
            
            <hr />
            </form>
        </>
    )
}