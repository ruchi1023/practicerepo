let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let passport = require('passport');

let surveyController = require('../controllers/survey');


router.get('/', surveyController.displaySurveyList);

/*Get route for displaying add page - Create Operation*/
router.get('/create', surveyController.displayCreatePage);

/*Get route for processing add page - Create Operation*/
router.post('/create', surveyController.processCreatePage);

/*Get route for displaying Edit page - UpdateOperation*/
router.get('/edit/:id', surveyController.displayEditPage);

/*Get route for processing Edit page - Update Operation*/
router.post('/edit/:id',  surveyController.processEditPage);

/*Get route for processing Edit page - Update Operation*/
router.get('/delete/:id',  surveyController.performDelete);



module.exports= router;