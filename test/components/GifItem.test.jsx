import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas <GifItem/>', () => {

    const title = 'Mustis';
    const url = 'https://localhost/algo.jpg';
    test('Debe mostrar el componente correctamente ', () => {


        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostra la imagen con URL y el  ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        //otra manera mas elegante de hacerlo

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });
    test('debe tener el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();// toBeTruthy() es para que exista
    });



});