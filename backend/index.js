const express = require('express')
require('./db/config')
const User = require('./db/User')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
console.log('app runing')
app.post('/register',async(request, response)=>{
   let user = new User(request.body);
   let result = await user.save()

    response.send(result)
})




app.listen(5000)
