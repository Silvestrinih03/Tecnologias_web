import express from "express";
import oracledb from "oracledb";
import dotenv from "dotenv";

const app = express();
const port = 3000;

//preparar p servidor para dialogar com o padrao json
app.use(express.json());

//serviços de backend
app.get("/listarAeronaves", async(req,res)=>{ // dps de add await precisa colocar async here
// 1 - abrir a conexo
// 2 - executar a busca (select das aeronaves)
// 3 - fechar a conexao
// 4 - devolver os dados encontrados

dotenv.config();
//acessar npmjs.com como documentaçao

//          Colocar >--await--< para ele executar um comando por vez, como o da conexao
//          Promises async/await
const connection = await oracledb.getConnection(
    {
        user: "process.env.ORACLE_DB_USER",
        password: "process.env.ORACLE_DB_PASSWORD",
        connectionString: "dados do servidor oracle..."//colocar uma virgula no fial depois de colocar o link do oracle cloud
    }
);

let result = await connection.execute("SELECT * FROM AERONAVES");
console 
await connection.close(); //tentar processar em ordem, ele so executa quando vc manda executar atraves do await
// todo metodo que tem promise deve usar async await
res.send(result);

});

app.put("/inserirAeronave", (req,res)=>{

});

app.delete("/excluirAeronave", (req,res)=>{

});

app.listen(port,()=>{
    console.log("Servidor HTTP funcionando...");
});

//         É necessario abrir e fechar as conexoes ORACLE pois vai preenchendo o espaço 
//         de armazenamento no oracle e dificultando o proceso de desenvolvimento.
//                         ---> ABRIR - USAR - FECHAR



