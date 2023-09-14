"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importações dos módulos necessários
const express_1 = __importDefault(require("express"));
// Variáveis ou (neste caso constantes) globais deste arquivo
const app = (0, express_1.default)();
const port = 3000;
// Configurando a aplicação backand para trabalhar com formato JSON na entrada e saída dos serviços
app.use(express_1.default.json());
// SERVIÇOS
// Entrada (request) >> PROCESSAMENTO >> Saída (response)
// Código ingênuo
app.post("/calcularIMC", (req, res) => {
    //Logica do cálculo de IMC
    const peso = req.body.peso;
    const altura = req.body.altura;
    const imc = peso / Math.pow(altura, 2);
    const dadosResposta = {
        resultadoIMC: imc,
    };
    res.send(dadosResposta);
});
// PARTE FINAL do app.ts é SUBIR O SERVIDOR COM OS SERVIÇOS INICIADOS...
app.listen(port, () => {
    console.log("Servidor HTTP rodando...");
});