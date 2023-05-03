const multi = require('./multiply');

test(
    'Caso 1 - Um número de parametro',
    () => {
        expect(multi.multiply('1')).toBe(1);
    }
);

test(
    'Caso 2 - Dois números de parametro, corretamente',
    () => {
        expect(multi.multiply('5,6')).toBe(30);
    }
);