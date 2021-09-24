const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

exports.signup = async (req, res, next) => {
	const {
		name,
		email,
		password,
		passwordConfirm
	
	} = req.body;

	console.log(process.env);

	const newUser = await User.create({
		name,
		email,
		password,
		passwordConfirm
		
	});

	// JWT Token sign
	const token = signToken(newUser._id);

	res.status(200).json({
		status: "success",
		token,
		data: {
			User: newUser,
		},
	});
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	// 1) check if email and password exists
	if (!email || !password) {
		return next(res.status(404).json({
			status: "Error",
			message: `Wrong Email or Password!`,
		}));
	}

	// 2) Check if user exists & password is correct
	const user = await User.findOne({ email }).select("+password"); // Password select field is false in model So have to explicitly select it
	const correct = await user.correctPassword(password, user.password); // compare func , method in user model

	if (!user || !correct) {
		return next(res.status(404).json({
			status: "Error",
			message: `Wrong Email or Password!`,
		}));
	}
	// 3) If everything ok Send JWT to client
	const token = signToken(user._id);

	res.status(200).json({
		status: "success",
		token,
	});
};

exports.protect = async (req, res, next) => {
	//1) Get the Token and check if it is there
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		return next(res.status(404).json({
			status: "Error",
			message: `You are not logged in !!`,
		}));
	}

	//2) Verify the token
	const decoded = await promisify(jwt.verify)(
		JSON.parse(token),
		process.env.JWT_SECRET
	);

	//3) Check if user still exists
	const freshUser = await User.findOne({ _id: decoded.id });
	if (!freshUser) {
		return next(res.status(404).json({
			status: "Error",
			message: `This User does not exist!`,
		}));
	}

	//4) Check if user changed the password after token generation
	if (freshUser.changedPasswordAfter(decoded.iat)) {
		return next(res.status(404).json({
			status: "Error",
			message: `User recently changed passwords!`,
		}));
	}

	//5) Grant access to protected routes
	req.user = freshUser;
	next();
};
