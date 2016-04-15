var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    user_id: String,
    content: String,
    updated_at: Date
}).pre('save', function (next) {
    this.updated_at = new Date();
    console.log(this.updated_at)
    next()
}).pre('findOneAndUpdate', function () {
    console.log('prepare to update')
    this.update({}, { $set: { updated_at: new Date() } })
})

exports.TodoModel = mongoose.model('Todo', Todo);
mongoose.connect('mongodb://localhost/express-todo');