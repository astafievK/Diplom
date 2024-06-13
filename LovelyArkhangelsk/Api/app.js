const express = require("express");
const cors = require('cors');

const port = process.env.PORT || 5000;

const authRouter = require('./Routers/authRouter')
const userRouter = require('./Routers/userRouter')
const roleRouter = require('./Routers/roleRouter')
const employeeRouter = require('./Routers/employeeRouter')
const imageRouter = require('./Routers/imageRouter')
const serviceRouter = require('./Routers/serviceRouter')
const employeeHasServiceRouter = require('./Routers/employeeHasServiceRouter')
const timeRouter = require('./Routers/timeRouter')

const app = express();

app.use(cors())
app.use(express.static(__dirname));
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/role", roleRouter)
app.use("/employee", employeeRouter)
app.use("/image", imageRouter)
app.use("/service", serviceRouter)
app.use('/employeehasservice', employeeHasServiceRouter)
app.use('/time', timeRouter)

const start = async () => {
    try {
        app.listen(port, () => {console.log(`Listening on port ${port}`)});
    } catch (e) {
        console.log(e)
    }
}

start()