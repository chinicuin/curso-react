import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testuser = {
                uid: 'ABC123',
                username: 'El_Papi1502'
            };
        const user = getUser();

        expect(testuser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const testUser = {
                uid: 'ABC567',
                username: 'Mario'
            };
        const user = getUsuarioActivo('Mario');

        expect(user).toEqual(testUser);
    });
});