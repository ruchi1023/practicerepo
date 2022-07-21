let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');

// create a reference to the model
let Survey = require('../model/survey');


module.exports.displaySurveyList = (req,res,next) => {

    Survey.find((err,SurveyList) =>{
       if (err)
       {
           return console.error(err);

       }

       else{
         
          res.render('surveys/surveylist', {title: 'Survey-List', SurveyList: SurveyList});
       }
    }
    );
}

module.exports.displayCreatePage= (req,res, next) => {

    res.render('surveys/create', {title: 'Create a Survey'});
 
}


module.exports.processCreatePage= (req,res, next) => {

    let newSuvrey = Survey({
    
       "survey_topic": req.body.survey_topic,
       "description":req.body.description,
       "question1":req.body.question1,
       "answer1":req.body.answer1,
       "question2":req.body.question2,
       "answer2":req.body.answer2,
       "question3":req.body.question3,
       "answer3":req.body.answer3

    });
       Survey.create(newSuvrey,(err, Survey) =>{
          if(err)
          {
             console.log(err);
             res.end(err);
          }
    
          else{
             res.redirect('/surveylist');
          }
       });
}



module.exports.displayEditPage = (req,res, next) => {
let id = req.params.id;

    Survey.findById(id,(err, surveytoEdit) =>{
      if (err)
      {
         console.log(err);
         res.end(err);
      }

      else{
         
         res.render('surveys/edit', {title: 'Edit-Survey', survey: surveytoEdit});
         
         // displayName: req.user ? req.user.displayName : ''});

      }


    })
   
}

module.exports.processEditPage = (req,res, next) => {

    let id = req.params.id;
    
    let updatedSurvey = Survey({
        "_id":id,
        "survey_topic": req.body.survey_topic,
       "description":req.body.description,
       "question1":req.body.question1,
       "answer1":req.body.answer1,
       "question2":req.body.question2,
       "answer2":req.body.answer2,
       "question3":req.body.question3,
       "answer3":req.body.answer3
       
    
    });
    
       Survey.updateOne({_id: id}, updatedSurvey, (err) =>{
          if(err)
          {
             console.log(err);
             res.end(err);
          }
         else{
           res.redirect('/surveylist');
    
         }
    
       });
       
}

module.exports.performDelete = (req, res, next) => {
   let id = req.params.id;

   Survey.deleteOne({_id: id}, (err) => {
       if(err)
       {
           console.log(err);
           res.end(err);
       }
       else
       {
            // refresh the tournament list
            res.redirect('/surveylist');
            
       }
   });
}

