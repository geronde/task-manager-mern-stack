//defining modules
var express = require('express');
var taskRouter = express.Router();
var Project = require('../../models/project')

//defining async middleware
const asyncMiddleware = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    }

//get all of tasks of a selected List
taskRouter.get('/api/project/:project_id/list/task', asyncMiddleware(async function(req, res, next) {
    Project.findById(req.params.project_id, function(err, items) {
        items.save(function(err, item) {
            res.json(item.lists)
        })
    })
}))

//Create a task
taskRouter.post('/api/project/:project_id/list/:list_id/task/new', asyncMiddleware(async function(req, res, next) {
    Project.findOne({ "_id": req.params.project_id }, await function(err, items) {

        const task = items.lists.id(req.params.list_id).tasks
        task.push(req.body)
        items.save();
        res.json(items.lists)
    })

}))


//edit a task
taskRouter.put('/api/project/:project_id/list/:list_id/task/:task_id',
	asyncMiddleware(async function(req,res,next){
		Project.findById(req.params.project_id,await function(err,items){
			var editedTask=items.lists.id(req.params.list_id).tasks.id(req.params.task_id)
			editedTask.title=req.body.title
			items.save()
			res.json(items.lists)
		}) 
			
}))

//delete a task
taskRouter.delete('/api/project/:project_id/list/:list_id/task/:task_id', 
	asyncMiddleware(async function(req,res,next){
	Project.findById(req.params.project_id,await function(err,items){
			items.lists.id(req.params.list_id).tasks.id(req.params.task_id).remove()
			items.save()
			res.json(items.lists)
		})
}))

//update set of tasks/lists after swapping/shifting tasks
taskRouter.put('/api/project/:project_id/list/task/move',
	asyncMiddleware(async function(req,res,next){
		Project.findById(req.params.project_id, await function(err,items){
			
			const tasks = req.body.data.task
			items.lists=tasks
			items.save();
			res.json(items.lists)	
		}) 
			
}))


module.exports = taskRouter;