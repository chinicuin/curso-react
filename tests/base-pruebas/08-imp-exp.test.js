import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/base-pruebas/data/heroes";

describe('Testing file 08-imp-exp', () => {
    test('getHeroById should return one hero', () => {
        const id = 1;
        const hero = getHeroeById(id);
        const myHero = { id: 1, name: 'Batman', owner: 'DC' };

        expect(hero).toEqual(myHero);
    });

    test('getHeroById should return undefinend id id do not exist', () => {
        const id = 100;
        const hero = getHeroeById(id);
        // const myHero = { id: 1, name: 'Batman', owner: 'DC' };

        expect(hero).toBeUndefined();
    });

    test('getHeroesByOwner should return DC heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        // const myHero = { id: 1, name: 'Batman', owner: 'DC' };

        expect(heroes.length).toEqual(3);
        expect (heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroesByOwner should return Marvel heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        // const myHero = { id: 1, name: 'Batman', owner: 'DC' };

        expect(heroes.length).toBe(2);
    });
});