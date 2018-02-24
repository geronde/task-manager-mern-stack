var mongoose=require('mongoose')

var TaskSchema = new mongoose.Schema({
	title: {
		type:String,
		required:true
	}
})

module.exports= mongoose.model('Task', TaskSchema)