var mongoose=require('mongoose')
var ListSchema=require('./list').schema;

var ProjectSchema= new mongoose.Schema({
	title:{
		type:String,
		required:true,
		unique:true
	},
	description:String,
	lists: [ListSchema]
})



module.exports= mongoose.model('Project',ProjectSchema)