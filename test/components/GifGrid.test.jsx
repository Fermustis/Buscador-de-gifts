import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');//simulamos el llamado a la funcion useFetchGifs

describe('Pruebas en <GifGrind/>>', () => {

    const category = 'Death';
    test('debe de mostrar el componente correctamente, loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });


        render(<GifGrid category={category} />);


        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

    });


    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Cualquier cosa',
            url: 'https://localhost/cualquier/cosa.jpg'
        }, {
            id: '123',
            title: 'Cualquier cosa2',
            url: 'https://localhost/cualquier/cosa2.jpg'
        }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
        screen.debug();


    })

})