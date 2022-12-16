const jwt = require('jsonwebtoken')
//const models = require('../models')

function authenticate(req, res, next) {

     // access the headers 
     const header = req.headers['authorization']
     if(header) {
         const token = header.split(' ')[1] // token 
         // decode the token 
         try {
         const decoded = jwt.verify(token, process.env.SECRET_KEY)
         if(decoded) {
             const name = decoded.name 
             const authUser = users.find(user => user.name == name)
             if(authUser) {
                 // continue with the original request 
                next() 
             } else {
                 res.json({error: 'Unable to authenticate'})
             }
         } else {
             res.json({error: 'Unable to authenticate'})
         }
        } catch {
            res.json({error: 'Unable to authenticate'})
        }

 
     } else {
         res.json({error: 'Required authorization headers are missing.'})
     }
}


module.exports = authenticate 