"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _db = _interopRequireDefault(require("./utils/db.js"));
var _Auth = _interopRequireDefault(require("./routes/Auth.js"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _Blog = _interopRequireDefault(require("./routes/Blog.js"));
var _Dashboard = _interopRequireDefault(require("./routes/Dashboard.js"));
var _comment = _interopRequireDefault(require("./routes/comment.js"));
var _Public = _interopRequireDefault(require("./routes/Public.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var PORT = process.env.PORT || 4000;
var app = (0, _express["default"])();
(0, _db["default"])();

// const corsOption = {
//   origin : 'http://localhost:5173',
//   credentials : true
// }

app.use(_express["default"].json());
app.use(_express["default"]["static"]('public'));
var corsOptoins = {
  origin: true,
  credentials: true
};
app.use((0, _cors["default"])(corsOptoins));
app.get("/", function (req, res) {
  res.send("Backend ");
});
app.use((0, _cookieParser["default"])());
app.use("/auth", _Auth["default"]);
app.use("/blog", _Blog["default"]);
app.use("/dashboard", _Dashboard["default"]);
app.use("/comment", _comment["default"]);
app.use("/public", _Public["default"]);
app.listen(PORT, function () {
  console.log("app is running on ".concat(PORT));
});
