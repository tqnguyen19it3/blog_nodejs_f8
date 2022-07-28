const Course = require('../models/CourseModel');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController{

    //[GET] / render course page details
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show_details', { course: mongooseToObject(course) });
            })
            .catch(next);       
    }

    //[GET] / render create course page 
    create(req, res, next){
        res.render('courses/create');
    }

    //[POST] / create course  
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`; //lấy ảnh từ video youtube có sẵn
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }
}

module.exports = new CourseController;