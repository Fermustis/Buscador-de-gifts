import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueba en el hook useFetcGifs', () => { 
    test('debe regresar el estado inicial', () => { 
        
       // const {data:images, loading} = useFetchGifs('One Punch');// aunque parezca logico no se puede hacer esto porque el hook no esta dentro de un componente
       const { result}= renderHook(() => useFetchGifs('One Punch'));// renderHook es una funcion que recibe una funcion, y esa funcion es el hook que queremos probar
        const{images,isLoading} = result.current;
        expect(images.length).toBe(0);// el estado inicial es un arreglo vacio
        expect(isLoading).toBeTruthy;// el estado inicial es true
        
    })
    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => { 
        
       // const {data:images, loading} = useFetchGifs('One Punch');// aunque parezca logico no se puede hacer esto porque el hook no esta dentro de un componente
       const { result}= renderHook(() => useFetchGifs('One Punch'));// renderHook es una funcion que recibe una funcion, y esa funcion es el hook que queremos probar
        await waitFor(() => { 

            () => expect(result.current.images.length).toBeGreaterThanOrEqual(0);
            
            
            //()=> expect(result.current.isLoading).toBe(false);

        }); 
       
       const{images,isLoading} = result.current;
        expect(images.length).toBeGreaterThanOrEqual(0);// el estado inicial es un arreglo vacio
        expect(isLoading).toBeFalsy();// el estado inicial es true
        
     })
 })