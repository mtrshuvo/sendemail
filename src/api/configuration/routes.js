const userRouters = require("../routers/userRouter");

module.exports = (app) => {
    app.use("/api/sendmail", userRouters);


}