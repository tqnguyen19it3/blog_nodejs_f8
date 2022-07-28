class SiteController{

    //[GET] / render home page
    index(req, res){
        res.render('home');
    }

    //[GET] / render serach page
    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;