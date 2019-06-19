
const express= require('express');
const router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;
//models
const User = require('../models/secuser');


//get a list from db
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
//controllerrs
const login = require('../controllers/login');



router.post('/donate',login.donate);
router.get('/showdon',login.showdon);
router.post('/locationsearch',login.locationsearch);



module.exports=router;