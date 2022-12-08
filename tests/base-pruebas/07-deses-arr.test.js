import { types } from "@babel/core";
import { retornaArreglo } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe('Testing file 07-deses-arr', () => {
    test('should return a string and a number ', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });
});