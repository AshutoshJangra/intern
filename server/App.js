const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

const app = express();

let cors = require('cors');


const fileRouter = require("./router/File");
const UserRouter = require("./router/User");

// middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors());
app.use(compression());
app.use(express.json());


app.use(express.static('build'));


//router
app.use("/api/v1/files", fileRouter);
app.use("/api/v1/users", UserRouter);

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.all("*", (req, res, next) => {
	res.status(404).json({
		status: "Fail",
		message: `Can't find ${req.originalUrl} on this server!`,
	});

});


//for server
module.exports = app;


