// const UserRouter = require('./UserRouter')
const JobRouter = require('./JobRoutes')

const routes = (app) => {
    app.use('/api/jobs', JobRouter)
}

module.exports = routes