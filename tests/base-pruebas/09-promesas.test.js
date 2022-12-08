import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

jest.setTimeout(10000);

describe('Testing file 09-promesas', () => {
    // //done parameter is the name of the "finish" function.
    // test('getHeroeByIdAsync should return one hero', (done) => {
    //     const id = 1;
    //     getHeroeByIdAsync(id).then( hero => {
    //         expect(hero).toEqual({
    //             id: 1,
    //             name: 'Batman',
    //             owner: 'DC'
    //         });
    //         //Tell jest to wait until the promise as responded or the code is executed.
    //         done();
    //     });
    // });

    test('getHeroeByIdAsync should return error if the hero does not exist', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                console.log(hero);
                done();
            })
            .catch( error => {
            // console.log(error);
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        });
    });
});