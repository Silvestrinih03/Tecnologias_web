// Importações dos módulos necessários
import express, { Express } from "express";

// Variáveis ou (neste caso constantes) globais deste arquivo
const app = express();
const port = 3000;

// Configurando a aplicação backand para trabalhar com formato JSON na entrada e saída dos serviços
app.use(express.json());

// SERVIÇOS
// Entrada (request) >> PROCESSAMENTO >> Saída (response)
// Código ingênuo
// app.post("/calcularIMC", (req, res)=>{
//     //Logica do cálculo de IMC
//     const peso = req.body.peso;
//     const altura = req.body.altura;
//     const imc = peso/Math.pow(altura,2);
//     const dadosResposta = {
//         resultadoIMC: imc,
//     }
//     res.send(dadosResposta);    
// });

// SERVIÇOS
// Código correto
app.post("/calcularIMC", (req, res)=>{
    //Logica do cálculo de IMC
    const peso = req.body.peso;
    const altura = req.body.altura;
    let imc = undefined;
    let status = "ERROR";
    let message = "";

    // Validadando se altura e peso chegaram
if (peso !== undefined && altura !== undefined){
    if (peso>0 && altura>0){
        imc = peso/Math.pow(altura,2);
        status = "SUCCESS";
    }else if (peso<=0 && altura<=0){
        message = "Peso e Altura estão inválidos (menor ou igual a zero). Corrija";
    }else if (peso<=0){
        message = "Peso está inválido (menor ou igual a zero). Corrija";
    }else if (altura<=0){
        message = "Altura está inválida (menor ou igual a zero). Corrija";
    }
}else{
    //Tratar problema quando peso ou altura não chegaram
    message = "Peso e altura devem ser infomadas para o cálculo do IMC."
}

const dadosResposta = {
    status: status,
    data: imc,
    message: message,
}

});

// PARTE FINAL do app.ts é SUBIR O SERVIDOR COM OS SERVIÇOS INICIADOS...
app.listen(port, ()=>{
    console.log("Servidor HTTP rodando...");
});