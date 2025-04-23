const { Founder, Review, Investor } = require('../models')
const axios = require('axios')
const FormData = require('form-data')
let bcrypt = require('bcryptjs');
let generateJwt = require('../helpers/jwt.js').generateJwt
const {OAuth2Client} = require('google-auth-library');
const sendEmail = require('../features/nodemailer.js')

class Controller {
    static register(req, res, next) { 
        let newUser = {}

        if (!req.file) {
            newUser.first_name = req.body.first_name
            newUser.last_name = req.body.last_name
            if (req.body.username == '' || req.body.username == null) {
                newUser.username = req.body.email              
            } else {
                newUser.username = req.body.username
            }
            newUser.email = req.body.email
            newUser.password = req.body.password
            newUser.role = req.body.role
            newUser.phoneNumber = req.body.phoneNumber
            newUser.region = req.body.region
            newUser.company_name = req.body.company_name
            
            if (req.body.company_website.includes("https://www") || req.body.company_website.includes("http://www")) {
                newUser.company_website = req.body.company_website
            } else if (req.body.company_website.includes("www")) {
                newUser.company_website = `https://${req.body.company_website}`
            } else {
                newUser.company_website = `https://www.${req.body.company_website}`
            }

            if (req.body.linkedin_url.includes("https://www") || req.body.linkedin_url.includes("http://www")) {
                newUser.linkedin_url = req.body.linkedin_url
            } else if (req.body.linkedin_url.includes("www")) {
                newUser.linkedin_url = `https://${req.body.linkedin_url}`
            } else {
                newUser.linkedin_url = `https://www.${req.body.linkedin_url}`
            }

            newUser.company_industry = req.body.company_industry
            newUser.team_size = req.body.team_size
            newUser.admin_status = false
            newUser.active_status = false   
            
            Founder.create(newUser)
            .then(user => {
                let data = {}
                data.message = 'Success registering a new founder'
                data.id = user.id
                data.first_name = user.first_name
                data.last_name = user.last_name
                data.username = user.username
                data.email = user.email
                data.role = user.role
                data.phoneNumber = user.phoneNumber
                data.profilePic = null
                data.region = user.region
                data.company_name = user.company_name
                data.company_website = user.company_website
                data.company_industry = user.company_industry
                data.team_size = user.team_size
                data.linkedin_url = user.linkedin_url
                data.admin_status = user.admin_status
                data.active_status = user.active_status
    
                res.status(201).json(data)
                sendEmail(data)
            })
            .catch(err => {
                next({ name: err.name, validation: err.errors, code: 500, message: err.message })
            })
        } else {
            let image = new FormData()

            let fileType = false
            let fileSize = false

            if (req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/png' || req.file.mimetype == 'image/gif') {
                fileType = true
            }

            if (req.file.size <= 230400) { // 1 kB = 1024 bytes; 225 kB = 230,400 bytes (according to google & my laptop)
                fileSize = true
            }
            if (fileType == true && fileSize == true) {
                image.append('file', req.file.buffer.toString("base64"))
                image.append('fileName', req.file.originalname)
                image.append('useUniqueFileName', 'false')
        
                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    auth: {
                        username: process.env.IMAGEKIT_KEY
                    },  
                    headers: {
                        ...image.getHeaders()
                    },
                    data: image
                })
                .then(newImage => {
                    console.log(newImage, )
                    newUser.first_name = req.body.first_name
                    newUser.last_name = req.body.last_name
                    newUser.username = req.body.username
                    newUser.email = req.body.email
                    newUser.password = req.body.password
                    newUser.role = req.body.role
                    newUser.phoneNumber = req.body.phoneNumber
                    newUser.region = req.body.region
                    newUser.company_name = req.body.company_name
                    newUser.company_website = req.body.company_website
                    newUser.profilePic = newImage.data.url                  
                    newUser.company_industry = req.body.company_industry
                    newUser.team_size = req.body.team_size
                    newUser.linkedin_url = req.body.linkedin_url
                    newUser.admin_status = false
                    newUser.active_status = false  
        
                    return Founder.create(newUser)
                })
                .then(user => {
                    let data = {}
                    data.message = 'Success registering a new founder'
                    data.id = user.id
                    data.first_name = user.first_name
                    data.last_name = user.last_name
                    data.username = user.username
                    data.email = user.email
                    data.role = user.role
                    data.phoneNumber = user.phoneNumber
                    data.profilePic = user.profilePic
                    data.region = user.region
                    data.company_name = user.company_name
                    data.company_website = user.company_website
                    data.company_industry = user.company_industry
                    data.team_size = user.team_size
                    data.linkedin_url = user.linkedin_url
                    data.admin_status = user.admin_status
                    data.active_status = user.active_status
        
                    res.status(201).json(data)
                    sendEmail(data)
                })
                .catch(err => {
                    next({ name: err.name, validation: err.errors, code: 500, message: err.message })
                })    
            } else {
                if (fileType && !fileSize) {
                    next({ code: 400, message: 'Image size exceeds maximum limit. Max. size is 225kB' })
                } else if (!fileType && fileSize) {
                    next({ code: 400, message: 'Invalid image format. Only formats .jpg, .jpeg, .png, are allowed'})
                } else {
                    next({ code: 400, message: 'Invalid image format & file size. Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB' })
                }
            }  
        }
    }

    static login(req, res, next) { // OK
        let userEmail = req.body.email
        let userPassword = req.body.password

        Founder.findOne({
            where: {email: userEmail}
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(userPassword, user.password) === true) {
                    let payload = {}
                    payload.id = user.id
                    payload.first_name = user.first_name
                    payload.last_name = user.last_name
                    payload.username = user.username
                    payload.email = user.email
                    payload.role = user.role
                    payload.phoneNumber = user.phoneNumber
                    payload.profilePic = user.profilePic
                    payload.region = user.region
                    payload.company_name = user.company_name
                    payload.company_website = user.company_website
                    payload.company_industry = user.company_industry
                    payload.team_size = user.team_size
                    payload.linkedin_url = user.linkedin_url
                    payload.admin_status = user.admin_status
                    payload.active_status = user.active_status

                    let accessToken = generateJwt(payload)

                    res.status(200).json({accessToken:accessToken, user: payload})
                } else {
                    next({ code: 401, message: 'Invalid username/password' })
                }
            } else {
                next({ code: 401, message: 'Invalid username/password' })
            }
        })
        .catch(err => {
            next({ code: 500, message: `${err.message}` })
        })
    }

    static logout(req, res, next) {
        if (req.loggedUser || req.headers.accesstoken) {
            delete req.headers.accesstoken
            delete req.loggedUser
            res.status(200).json({message: 'Successfully logged-out'})
        } else {
            next({ code: 400, message: `No one was logged-in` })
        }
    }

    static googleLogin(req, res, next) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        logger('ID Token', req.body.idToken)
        logger('Google Login', process.env.GOOGLE_CLIENT_ID)
        let payload = null
        client.verifyIdToken({
            idToken: req.body.idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then((ticket) => {
            payload = ticket.getPayload();
            return payload
        })
        .then(payload => {
            console.log(payload.email)
            return Founder.findOne({ 
                where: { email: payload.email } 
            })
        })
        .then(loggedUser => {
            if (loggedUser) { // if user is already registered
              return loggedUser
            } else { // if user is not registered yet
                next({ code: 401, message: "You Don't Have an Account Yet. Please Register First"})
            }
        })
        .then(user => {
            let googleUser = {}
            googleUser.id = user.id
            googleUser.first_name = user.first_name
            googleUser.last_name = user.last_name
            googleUser.username = user.username
            googleUser.email = user.email
            googleUser.role = user.role
            googleUser.phoneNumber = user.phoneNumber
            googleUser.profilePic = user.profilePic
            googleUser.region = user.region
            googleUser.company_name = user.company_name
            googleUser.company_website = user.company_website
            googleUser.company_industry = user.company_industry
            googleUser.team_size = user.team_size
            googleUser.linkedin_url = user.linkedin_url
            googleUser.admin_status = user.admin_status
            googleUser.active_status = user.active_status
            
            let accessToken = generateJwt(googleUser)
            res.status(200).json({accessToken:accessToken, user: googleUser})
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static fetchFounders(req, res, next) { // OK
        Founder.findAll({
            where: {admin_status: false}
        })
        .then(founders => {
            let allFounders = []
            let founder;
            for (let i = 0; i < founders.length; i++) {
                founder = {}
                founder.id = founders[i].id
                founder.first_name = founders[i].first_name
                founder.last_name = founders[i].last_name
                founder.username = founders[i].username
                founder.email = founders[i].email
                founder.role = founders[i].role
                founder.phoneNumber = founders[i].phoneNumber
                founder.profilePic = founders[i].profilePic
                founder.region = founders[i].region
                founder.company_name = founders[i].company_name
                founder.company_website = founders[i].company_website
                founder.company_industry = founders[i].company_industry
                founder.team_size = founders[i].team_size
                founder.linkedin_url = founders[i].linkedin_url
                founder.admin_status = founders[i].admin_status
                founder.active_status = founders[i].active_status

                allFounders.push(founder)
            }
            res.status(200).json(allFounders)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static fetchFounderProfile(req, res, next) { // OK
        let founderId = req.params.id
        Founder.findOne({
            where: {
                id: founderId
            },
            include: {
                model: Review,
                include: Investor
            }
        })
        .then(user => {
            if (user) {
                // console.log(user)
                let founder = {}
                founder.id = user.id
                founder.first_name = user.first_name
                founder.last_name = user.last_name
                founder.username = user.username
                founder.email = user.email
                founder.role = user.role
                founder.phoneNumber = user.phoneNumber
                founder.profilePic = user.profilePic
                founder.region = user.region
                founder.company_name = user.company_name
                founder.company_website = user.company_website
                founder.company_industry = user.company_industry
                founder.team_size = user.team_size
                founder.linkedin_url = user.linkedin_url
                founder.admin_status = user.admin_status
                founder.active_status = user.active_status
                founder.reviews = user.Reviews

                res.status(200).json(founder)
            } else {
                res.status(404).json({ message: 'error: user not found'} )
            }
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static verifyFounder(req, res, next) {
        let founderId = req.params.id
        let founder;
        Founder.findByPk(founderId)
        .then(user => {
            if (user) {
                founder = user
                return Founder.update({active_status: true}, {
                    where: {
                        id: founderId
                    }
                })
            } else {
                res.status(404).json({ message: 'error: user not found'})
            }
        })
        .then(() => {
            console.log('UPDATED')
            console.log(founder.id, founder.first_name)
            res.status(200).json({message: `Thanks ${founder.first_name} for verifying! Your account is active, you can now write a new review`})
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }
}

module.exports = Controller