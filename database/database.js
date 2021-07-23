const Sequelize=require('sequelize')

const connection=new Sequelize('guiaperguntas','root','1233214m',{
  host:'localhost',
  dialect:'mysql'
})

module.exports=connection