const JobRouter = require('./JobRouter')
const routes = (app) => {
    app.use('/api/jobs', JobRouter)
}

module.exports = routes