const ServiceCalculadora = require("../services/calculadora")

class ControllerCalculadora{

    Somar(req,res){
        try{
            const numero1 = req.body.numero1
            const numero2 = req.body.numero2

            const resultado = ServiceCalculadora.Somar(numero1,numero2)

            res.status(200).json({"O resultado da soma desses dois números é": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }

    Subtrair(req,res){
        try{
            const numero1 = req.body.numero1
            const numero2 = req.body.numero2

            const resultado = ServiceCalculadora.Subtrair(numero1,numero2)

            res.status(200).json({"O resultado da subtração desses dois números é": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }

    Multiplicar(req,res){
        try{
            const numero1 = req.body.numero1
            const numero2 = req.body.numero2

            const resultado = ServiceCalculadora.Multiplicar(numero1,numero2)

            res.status(200).json({"O resultado da multiplicação desses dois números é": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }

    Dividir(req,res){
        try{
            const numero1 = req.body.numero1
            const numero2 = req.body.numero2

            const resultado = ServiceCalculadora.Dividir(numero1,numero2)

            res.status(200).json({"O resultado da divisão desses dois números é": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }

    Potenciar(req,res){
        try{
            const numero = req.body.numero
            const expoente = req.body.expoente

            const resultado = ServiceCalculadora.Potenciar(numero,expoente)

            res.status(200).json({"O resultado vale": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }

    Radiciar(req,res){
        try{
            const numero = req.body.numero
            const indice = req.body.indice

            const resultado = ServiceCalculadora.Radiciar(numero,indice)

            res.status(200).json({"O resultado vale": resultado})
        }catch(e){
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }
}

module.exports = new ControllerCalculadora()