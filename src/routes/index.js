const newsRouter = require('./NewsRoute');
const siteRouter = require('./SiteRoute');
const courseRouter = require('./CourseRoute');

function route(app){

    app.use('/khoa-hoc', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;