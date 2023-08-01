const express = require('express')
require('./db/config')
const User = require('./db/User')
const cors = require('cors')
const Product = require('./db/Product')

const app = express()
app.use(express.json())
app.use(cors())

console.log('app runing')


app.post('/register', async (request, response) => {
    let user = new User(request.body);
    let result = await user.save()
    result = result.toObject();
    delete result.password
    response.send(result)
    console.log(result)
})

app.post('/login', async (request, response) => {
    try {
        if (request.body.email && request.body.password) {
            const user = await User.findOne({ email: request.body.email, password: request.body.password }).select('-password')

            if (user) {
                response.send(user)
            } else {
                console.log('user not found')
                response.status(404).send({ error: `user not found ` })
            }
        } else {
            response.status(400).send({ error: 'invalid login credentials' })
        }
    } catch (error) {
        response.status(500).send({ error: `Internal server Error ${error}` })
    }


})


app.post('/add-product', async (request, response) => {

    try {
        let product = new Product(request.body);
        let result = await product.save()
        response.send(result)
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: error })
    }

})


app.get('/', async (request, response) => {

    try {
        const data = await Product.find()

        response.send(data)
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: error })
    }
})

app.delete('/:id', async (request, response) => {

    try {
        const data = await Product.deleteOne({ _id: request.params.id })
        response.send(data)
    } catch (err) {
        console.log(err)
    }

})

app.put('/update/:_id', async (request, response) => {
    console.log(request.params._id)
   try {
    const data = await Product.updateOne({ _id: request.params._id }, {
        $set: {
            name: request.body.name,
            price: request.body.price,
            company: request.body.company,
            category: request.body.category
        }
    })
    response.send(data)
   } catch (error) {
    response.send({error:error})
   }
})

app.get('/search/:key',async(request,response)=>{

    try {
        const searchedData = await Product.find({
            "$or":[
                {name:{$regex:request.params.key}},
                {company:{$regex:request.params.key}},
                {category:{$regex:request.params.key}},
            ]
        })
     
      
            response.send(searchedData)
      
    } catch (error) {
        
    }

})



app.listen(5000)
