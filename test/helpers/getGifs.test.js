import { getGifs } from '../../src/Helpers/getGifs';
describe('Pruebas en getGifs', () => { 

    test('Debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');
       
        expect(gifs.length).toBeGreaterThan(0); // toBeGreaterThan(0) es para verificar que el arreglo tenga al menos un elemento
       //los elementos del arreglo deben de tener las propiedades id, title y url y el mismo orden
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
 })