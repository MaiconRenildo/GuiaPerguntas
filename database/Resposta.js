const Sequelize=require("sequelize")
const connection=require("./database")
const Pergunta = require("./Pergunta")

const Resposta=connection.define("respostas",{
  corpo:{
    type: Sequelize.TEXT,
    allowNull:false,
  },
  perguntaId:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
})
Resposta.sync({force:false}).then(()=>{
  console.log("Tabela de respostas criada com sucesso")
})
module.exports=Resposta