// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var nodemailer  = require('nodemailer');
var cors        = require('cors');
var config 		= require('./config.js');


// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 3003; // used to create, sign, and verify tokens
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: true}));
// use morgan to log requests to the console
app.use(morgan('dev'));


// =================================================================
// routes ==========================================================
// =================================================================
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.pass
    }
});

app.post('/send/email', (req,res)=>{

		// console.log(req.body.email);

		let mailOptions = {
		    from: '"Portfolio Website" andytuttle12@gmail.com', // sender address
		    to: 'andytuttle12@gmail.com', // list of receivers
		    subject: 'Contact form submission from portfolio ✔ ', // Subject line
		    // text: 'Hello world ?', // plain text body
		    html: '<strong> Hello, Andy. </strong> <br/><br/> <p>Someone made a contact form submission on your portfolio website.</p> <br/> <strong>Email: </strong>' + req.body.email + '<br/> <strong>Name: </strong>' + req.body.name + '<br/> <strong>Message: </strong><p>' + req.body.message +'</p><br/>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info)=> {
		    if (error)return error;
		    // console.log(info.messageId, info.response);
		});


		res.json({message: 'the route went through'})

});

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Your email server is running at http://35.165.246.93:' + port);
