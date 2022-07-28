const Course = require('../models/CourseModel');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class SiteController{

    //[GET] / render home page
    index(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject           (courses)
                });
            })
            .catch(error => next(error));
    }
                
    //[GET] / render serach page
    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;