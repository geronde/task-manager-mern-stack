var mongoose=require('mongoose')
var TaskSchema=require('./task').schema

var ListSchema= new mongoose.Schema({
     name: {
		type:String,
		required:true
	},
    tasks:[TaskSchema]
})

module.exports= mongoose.model('List',ListSchema)