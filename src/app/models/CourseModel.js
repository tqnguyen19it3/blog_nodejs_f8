const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600, required: true },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    level: { type: String },
    videoID: { type: String, required: true },
}, { timestamps: true, });

module.exports = mongoose.model('Course', Course);