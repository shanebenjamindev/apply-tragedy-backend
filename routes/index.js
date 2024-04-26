// const UserRouter = require('./UserRouter')
const JobRouter = require('./jobRoutes')

const routes = (app) => {
    app.use('/api/jobs', JobRouter)
}

module.exports = routes