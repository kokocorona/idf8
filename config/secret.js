require("dotenv").config();

console.log(process.env.USER_DB);
exports.config = {
  PASS_DB:process.env.PASS_DB,
  USER_DB:process.env.USER_DB,
  TOKEN_SECRET:process.env.TOKEN_SECRET,
  CLOUD_NAME:"dccoiwwxy",
  CLOUD_KEY:"664974667326928",
  CLOUD_SECRET:"dZhz2yfM5I8k9OB60HO9zVprjpI"
  
}