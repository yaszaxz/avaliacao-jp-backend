class ServiceCalculadora{

    Somar(numero1,numero2){
        if(isNaN(numero1) || isNaN(numero2)){
            throw new Error ("Digite apenas números!")
        }
        return numero1 + numero2
    }

    Subtrair(numero1,numero2){
        if(isNaN(numero1) || isNaN(numero2)){
            throw new Error ("Digite apenas números!")
        }
        return numero1 - numero2
    }

    Multiplicar(numero1,numero2){
        if(isNaN(numero1) || isNaN(numero2)){
            throw new Error ("Digite apenas números!")
        }
        return numero1 * numero2
    }

    Dividir(numero1,numero2){
        if(isNaN(numero1) || isNaN(numero2)){
            throw new Error ("Digite apenas números!")
        }
        return numero1 / numero2
    }

    Potenciar(numero,expoente){
        if(isNaN(numero) || isNaN(expoente)){
            throw new Error ("Digite apenas números!")
        }
        return numero ** expoente
    }

    Radiciar(numero,radical){
        if(isNaN(numero) || isNaN(radical)){
            throw new Error ("Digite apenas números!")
        }
        return numero ** (1/radical)
    }
}

module.exports = new ServiceCalculadora()