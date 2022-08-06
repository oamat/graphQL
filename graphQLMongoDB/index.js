const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const auth = require('./utils/auth')

process.env.SECRET_KEY_JWT_COURSE_API = '12345'

if (process.env.SECRET_KEY_JWT_COURSE_API){
  console.log('process.env.SECRET_KEY_JWT_COURSE_API : ' + process.env.SECRET_KEY_JWT_COURSE_API)
} else {
  console.log('process.env.SECRET_KEY_JWT_COURSE_API not found' )
}


mongoose.connect('mongodb://localhost:27017/graphQL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=> console.log('Conectado a MongoDB correctamente'))
  .catch(err => console.log('No se ha Conectado a MongoDB correctamente: ' + err.message))

const app = express()

app.use(
  auth.checkHeaders
)

app.use('/graphql', graphqlHTTP((req)=>{
  return{
    schema,
     context:{
      user: req.user
    } 
  }
}))

app.use('/graphiql', graphqlHTTP((req)=>{
  return{
    schema,
    graphiql:true    
  }
}))
app.listen(3131, ()=>{
    console.log('Escuchando del puerto: 3131')
})