const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter your name"],
	},

	email: {
		type: String,
		required: [true, "Please provide your email"],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email"],
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 8,
		select: false, // To exclude the password field in Output (Get Shops)
	},

	passwordConfirm: {
		type: String,
		required: [true, " Please confirm your password"],
		validate: {
			// only works on save & create
			validator: function(el) {
				return el === this.password;
			},
			message: " Passwords are not the same!",
		},
	},

	passwordChangedAt: Date,
    	
},{
	toJSON: {virtual:true},
	toObject: {virtual:true}
}
);

UserSchema.virtual('files' ,{
	ref:'File',
	foreignField:'owner',
	localField:'_id'
})

UserSchema.pre("save", async function(next) {
	// If password is not modified Do Nothing
	if (!this.isModified("password")) return next();

	// if modified Hash the password
	this.password = await bcrypt.hash(this.password, 12);

	// delete the confirm password feild to make it not persistant in DB
	this.passwordConfirm = undefined;

	next();
});

UserSchema.methods.correctPassword = async function(
	candidatePassword,
	shopPassword
) {
	return await bcrypt.compare(candidatePassword, shopPassword);
};

UserSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimeStamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return JWTTimestamp < changedTimeStamp;
	}

	// False means NOT changed
	return false;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
