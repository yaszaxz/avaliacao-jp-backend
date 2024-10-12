const {describe, it, expect} = require("@jest/globals")

const ServiceCalculadora = require('../src/services/calculadora')

describe('Testes da função SOMAR', () => {
    it("Somando dois números positivos", () => {
        const resultado = ServiceCalculadora.Somar(1,2)

        expect(resultado).toBe(3)
    })

    it("Somando dois números negativos", () => {
        const resultado = ServiceCalculadora.Somar(-1,-2)

        expect(resultado).toBe(-3)
    })

    it("Somando um número negativo com um positivo", () => {
        const resultado = ServiceCalculadora.Somar(-1,2)

        expect(resultado).toBe(1)
    })

    it("Somando um número positivo com um negativo", () => {
        const resultado = ServiceCalculadora.Somar(1,-2)

        expect(resultado).toBe(-1)
    })

    it("Somando números decimais", () => {
        const resultado = ServiceCalculadora.Somar(0.2,0.3)

        expect(resultado).toBe(0.5)
    })

    it("Somando um número inteiro positivo com outro decimal positivo", () => {
        const resultado = ServiceCalculadora.Somar(1,0.5)

        expect(resultado).toBe(1.5)
    })

    it("Somando um número decimal positivo com outro inteiro positivo", () => {
        const resultado = ServiceCalculadora.Somar(0.5,1)

        expect(resultado).toBe(1.5)
    })
})

describe('Testes da função SUBTRAIR', () => {
    it("Subtraindo dois números positivos", () => {
        const resultado = ServiceCalculadora.Subtrair(1,2)

        expect(resultado).toBe(-1)
    })

    it("Subtraindo dois números negativos", () => {
        const resultado = ServiceCalculadora.Subtrair(-1,-2)

        expect(resultado).toBe(1)
    })

    it("Subtraindo um número negativo com um positivo", () => {
        const resultado = ServiceCalculadora.Subtrair(-1,2)

        expect(resultado).toBe(-3)
    })

    it("Subtraindo um número positivo com um negativo", () => {
        const resultado = ServiceCalculadora.Subtrair(1,-2)

        expect(resultado).toBe(3)
    })

    it("Subtraindo números decimais", () => {
        const resultado = ServiceCalculadora.Subtrair(0.4,0.2)

        expect(resultado).toBe(0.2)
    })

    it("Subtraindo um número inteiro positivo com outro decimal positivo", () => {
        const resultado = ServiceCalculadora.Subtrair(1,0.5)

        expect(resultado).toBe(0.5)
    })

    it("Subtraindo um número decimal positivo com outro inteiro positivo", () => {
        const resultado = ServiceCalculadora.Subtrair(0.5,1)

        expect(resultado).toBe(-0.5)
    })
})

describe('Testes da função MULTIPLICAR', () => {
    it("Multiplicando dois números positivos", () => {
        const resultado = ServiceCalculadora.Multiplicar(1,2)

        expect(resultado).toBe(2)
    })

    it("Multiplicando dois números negativos", () => {
        const resultado = ServiceCalculadora.Multiplicar(-1,-2)

        expect(resultado).toBe(2)
    })

    it("Multiplicando um número negativo com um positivo", () => {
        const resultado = ServiceCalculadora.Multiplicar(-1,2)

        expect(resultado).toBe(-2)
    })

    it("Multiplicando um número positivo com um negativo", () => {
        const resultado = ServiceCalculadora.Multiplicar(1,-2)

        expect(resultado).toBe(-2)
    })

    it("Multiplicando números decimais", () => {
        const resultado = ServiceCalculadora.Multiplicar(0.3,0.2)

        expect(resultado).toBe(0.06)
    })

    it("Multiplicando um número inteiro positivo com outro decimal positivo", () => {
        const resultado = ServiceCalculadora.Multiplicar(8,0.5)

        expect(resultado).toBe(4)
    })

    it("Multiplicando um número decimal positivo com outro inteiro positivo", () => {
        const resultado = ServiceCalculadora.Multiplicar(0.5,8)

        expect(resultado).toBe(4)
    })
})

describe('Testes da função DIVIDIR', () => {
    it("Dividindo dois números positivos", () => {
        const resultado = ServiceCalculadora.Dividir(1,2)

        expect(resultado).toBe(0.5)
    })

    it("Dividindo dois números negativos", () => {
        const resultado = ServiceCalculadora.Dividir(-1,-2)

        expect(resultado).toBe(0.5)
    })

    it("Dividindo um número negativo com um positivo", () => {
        const resultado = ServiceCalculadora.Dividir(-1,2)

        expect(resultado).toBe(-0.5)
    })

    it("Dividindo um número positivo com um negativo", () => {
        const resultado = ServiceCalculadora.Dividir(1,-2)

        expect(resultado).toBe(-0.5)
    })

    it("Dividindo números decimais", () => {
        const resultado = ServiceCalculadora.Dividir(0.5,0.2)

        expect(resultado).toBe(2.5)
    })

    it("Dividindo um número inteiro positivo com outro decimal positivo", () => {
        const resultado = ServiceCalculadora.Dividir(8,0.5)

        expect(resultado).toBe(16)
    })

    it("Dividindo um número decimal positivo com outro inteiro positivo", () => {
        const resultado = ServiceCalculadora.Dividir(0.5,8)

        expect(resultado).toBe(0.0625)
    })
})

describe('Testes da função POTENCIAR', () => {
    it("Potenciando com base e expoente positivos", () => {
        const resultado = ServiceCalculadora.Potenciar(2,2)

        expect(resultado).toBe(4)
    })

    it("Potenciando com base negativa e expoente positivo par", () => {
        const resultado = ServiceCalculadora.Potenciar(-2,2)

        expect(resultado).toBe(4)
    })

    it("Potenciando com base negativa e expoente positivo ímpar", () => {
        const resultado = ServiceCalculadora.Potenciar(-2,3)

        expect(resultado).toBe(-8)
    })

    it("Potenciando com base positiva e expoente negativo", () => {
        const resultado = ServiceCalculadora.Potenciar(2,-3)

        expect(resultado).toBe(0.125)
    })

    it("Potenciando com base negativa e expoente negativo par", () => {
        const resultado = ServiceCalculadora.Potenciar(-2,-2)

        expect(resultado).toBe(0.25)
    })

    it("Potenciando com base negativa e expoente negativo ímpar", () => {
        const resultado = ServiceCalculadora.Potenciar(-2,-3)

        expect(resultado).toBe(-0.125)
    })

    it("Potenciando com base positiva e expoente zero", () => {
        const resultado = ServiceCalculadora.Potenciar(2,0)

        expect(resultado).toBe(1)
    })

    it("Potenciando com base negativa e expoente zero", () => {
        const resultado = ServiceCalculadora.Potenciar(-2,0)

        expect(resultado).toBe(1)
    })

    it("Potenciando com base zero e expoente positivo", () => {
        const resultado = ServiceCalculadora.Potenciar(0,2)

        expect(resultado).toBe(0)
    })
})

describe('Testes da função RADICIAR', () => {
    it("Radiciando com radicando e índice positivos", () => {
        const resultado = ServiceCalculadora.Radiciar(64,2)

        expect(resultado).toBe(8)
    })
    
    it("Radiciando com radicando positiva e índice positivo ímpar", () => {
        const resultado = ServiceCalculadora.Radiciar(64,3)

        expect(resultado).toBe(4)
    })
})