import {getSaludo} from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02-template-string', () => {
    test('getSaludo debe retornar hola "nombre"', () => {
        const saludo = 'Hola Mario';
        const message = getSaludo('Mario');
        expect(saludo).toBe(message);
        
    });
});