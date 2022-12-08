import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await";

describe('Testing file 11-async-await', () => {
    test('get Imagen should return the image URL', async() => {
        const url = await getImagen();
        // console.log(url);
        expect(typeof url).toBe('string');
    });
});