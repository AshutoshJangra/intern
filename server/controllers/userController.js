const File = require("../models/FileModel");


// exports.getAllShops = catchAsync(async (req, res, next) => {
// 	const shops = await Shop.find({});

// 	res.status(200).json({
// 		status: "success",
// 		shops,
// 	});
// });

exports.getUserInfo = async (req, res, next) => {
	const files = await File.find({
		owner: req.user._id,
	})
		.sort({ date: -1 })


	res.status(200).json({
		status: "success",
		user: req.user,	
        files
	});
};
