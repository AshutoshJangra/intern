const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
	name: {
		type: String,
		Required: true,
		unique: true,
	},

	link: {
		type: String
	},
	fileType:{
		type:String
	},
	owner: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: Date
},{
	toJSON: {virtual:true},
	toObject: {virtual:true}
});



const File = mongoose.model("File", fileSchema);

module.exports = File;
