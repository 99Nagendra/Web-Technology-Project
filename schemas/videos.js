const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//add a new custom function for identifying videos are for 
//particular lecturer or course
var videosSchema = new Schema({
    videoPath: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    name: String,
    teacherid: String,
    video_no:String,
    course_name:String


});

module.exports = mongoose.model('videos', videosSchema);
