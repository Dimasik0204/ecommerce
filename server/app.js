const express = require('express')
const app = express() 
const cors = require('cors')
const mongoose = require('mongoose')
const Book = require('./schemas/book')
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const models = require('./models')
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const authenticate = require('./middlewares/authMiddleware');



app.use(cors())
app.use(express.json())

// Put password for MongoDB in the .env file, and also username
// mongoose.connect('mongodb+srv://dmitry:Dimasik020491@cluster0.98h87e7.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// }, (error) => {
//     if(!error) {
//         console.log('Successfully connected to MongoDB Database')
//     } else {
//         console.log(error)
//     }
// })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


app.get('/register', (req, res) => {
    res.render('/register')
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)
  
    
    const user = await models.User.build({
        name:name, email:email, password: hashedPassword
    })

    let user_upload = await user.save()

    console.log(user_upload)
    res.json({success:'Successfully registered'})
})

app.post('/login-token', async (req, res) => {
    const {name, password } = req.body
    const user = await models.User.findOne({
        where: {
            name: name,
            // password: password
        }
    })
    if (user) { 
        const result = await bcrypt.compare(password, user.password)
        if(result) {
            const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY)
    
            res.json({ success: true, token: token, name: user.name })
        }else {
            res.json({ success: false, message: 'Username or password is incorrect.' })
       
        }
    }
    else {
        res.json({ success: false, message: 'no match' })
    }
})


app.post("/checkout", cors(),  async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Online Store",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.post('/customer-info', async (req, res) => {
   
                
 const { name, email, phone,country,city,postal,details } = req.body
     
    // check to make sure that all properties have a value 
    if(!name || !email || !phone || !country || !city || !postal || !details) {
         res.json({success: false, message: 'Invalid request'})
         return 
    }
 
    const customer = models.Customer.build({
        name: name,
        email: email,
        phone: phone,
        country: country,
        city: city,
        postal: postal,
        details: details
    })
 
    const savedCustomer = await customer.save()
    if(savedCustomer) {
         res.json({success: true, message: 'Shipping info has been sent'})
    } else {
         res.json({success: false, message: 'Shipping info not saved.'})
    }
 
 })



app.listen(process.env.PORT || 8080, () => {
	console.log("Let's get ready to rumble!")
})