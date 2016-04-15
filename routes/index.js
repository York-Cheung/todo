var mongoose = require('mongoose');
var Todo = require('../db').TodoModel

exports.index = function (req, res) {
	Todo.find().exec((err, todos) => {
		if (err) { console.log(err); return; }
		// res.render('index', { todos: todos })
		res.json(todos)
	})

};

exports.create = function (req, res) {
	new Todo({
		content: req.body.content,
		//updated_at: new Date(),
	}).save(function (err, todo, count) {
		res.json({succeed: true});
	});
	console.log("input : %s", req.body.content)

}; 

exports.destory = function (req,res) {
	// console.log(req.params.id)
	Todo.findOneAndRemove(
		{ _id: req.params.id},
		(err, reseult) => {
			// console.log(result)
			if (err) {console.log(err); return err };
			res.json(reseult);
	 })
};

exports.update = function (req,res) {
	// console.log(req.params.id)
	Todo.findOneAndUpdate(
		{ _id: req.body.id},
		{ content: req.body.content},
		(err, reseult) => {
			// console.log(result)
			if (err) {console.log(err); return err };
			// res.redirect('/');
			res.json(result);
	 })
};
