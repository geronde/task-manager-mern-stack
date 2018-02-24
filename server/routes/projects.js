//defining modules
var express=require('express');
var projectRouter=express.Router();
var Project = require('../../models/project')

//get all projects
projectRouter.get('/api/project', function(req,res,next){
	Project.find(function(err, projects){
		res.json(projects)
	})
})

//find a project using an Id
projectRouter.get('/api/project/:id', function(req,res,next){
	Project.findById(req.params.id, function(err, singleProject){
		res.json(singleProject)
	})
})

//Create a project
projectRouter.post('/api/project/new', function(req,res,next){
	Project.create(req.body, function(err, newProject){
		res.json(newProject)
	})
})

//edit a project
projectRouter.put('/api/project/:id',function(req,res,next){
	Project.findByIdAndUpdate(req.body._id, req.body, { new: true}, function(err, updatedProject){
		res.json(updatedProject)
	})
})

//delete a project
projectRouter.delete('/api/project/:id', function(req,res,next){
	Project.findByIdAndRemove(req.params.id,req.body, function(err, removedProject){
		res.json(removedProject)
	})
})


module.exports=projectRouter;