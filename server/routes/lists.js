//defining modules
var express=require('express');
var listRouter=express.Router();
var Project = require('../../models/project')

//defining async middleware
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  }

//get all of List of a selected project
listRouter.get('/api/project/:project_id/list', asyncMiddleware(async function(req,res,next){
		 //res.json(await List.findById())
           Project.findById(req.params.project_id, function(err, items){
           	    res.json(items.lists)
           })                  
	}))

//Create a list
listRouter.post('/api/project/:project_id/list/new', asyncMiddleware(async function(req,res,next){
        //res.json(await List.create(req.body))
		Project.findById(req.params.project_id, await function(err,items){
			items.lists.push(req.body)
			items.save(function(err,item){
				res.json(item.lists)
			});
			
		})
}))

//edit a project
listRouter.put('/api/project/:project_id/list/:list_id',
	asyncMiddleware(async function(req,res,next){
		Project.findOneAndUpdate({"_id":req.params.project_id,"lists._id":req.params.list_id}, 
			{
				$set:{
					"lists.$.name":req.body.name
				}
			},
			{ "new": true}, 
			await function(err, items){
			items.save(function(err,item){
				res.json(item.lists)
			})
		})
}))

//delete a project
listRouter.delete('/api/project/:project_id/list/:list_id', 
	asyncMiddleware(async function(req,res,next){
	Project.findOneAndUpdate({"_id":req.params.project_id,"lists._id":req.params.list_id}, 
			{
				$pull:{
					"lists":{"_id":req.params.list_id}
				}
			},
			{ "new": true}, 
			await function(err,items){
			items.save();
			res.json(items.lists)
		})	
}))

module.exports=listRouter;