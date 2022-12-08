describe('Pruebas en demo component', () => {
    test('Esta es una prueba', () => {
        // 1. Inicialización
        const message1 = 'hola mundo';
    
        // 2. Estímulo
        const messsage2 = message1.trim();
    
        // 3. Observar el comportamiento esperado (aserción)
        expect(message1).toBe(messsage2);
    });
});
