class NewsController{

    //[GET] / render news page
    index(req, res){
        res.render('news');
    }
}

module.exports = new NewsController;