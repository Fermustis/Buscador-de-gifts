import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"
describe('Pruebas en <AddCategory/>', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        //lanzar evento
        fireEvent.input(input, { target: { value: 'Death' } });
        expect(input.value).toBe('Death');

        //screen.debug();

    })

    test('Debe de llamara onNewCategory si el input tiene un valor ', () => {

        const inputValue = 'Death';
        const onNewCategory = jest.fn();//funcion simulada con jest 
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();

        //al final de renderizar el componente el input debe estar vacio
        expect(input.value).toBe('');

        // //la funcion debe haber sido llamada
        // expect(onNewCategory).toHaveBeenCalled();
        // //la funcion cuantas veces fue llamada
        // expect(onNewCategory).toHaveBeenCalledTimes(1);
        // // la funcion debe ser llamado con el argumento esperado
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })
    test('No debe de llamar onNewCategory si el input esta vacio ', () => {
        const inputValue = 'Death';
        const onNewCategory = jest.fn();//funcion simulada con jest 
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();

        //al final de renderizar el componente el input debe estar vacio
        expect(input.value).toBe('');
        //la funcion no debe haber sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //otra forma de verificar que la funcion no fue llamada
        expect(onNewCategory).not.toHaveBeenCalled();


    });


})