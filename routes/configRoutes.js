const indexR = require("./index");
const usersR = require("./users");
const uploadsR = require("./uploads");


exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/uploads",uploadsR);


}