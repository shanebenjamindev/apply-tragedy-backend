// const UserRouter = require('./UserRouter')
const JobRouter = require('./jobRoutes')
// const OrderRouter = require('./OrderRouter')
// const PaymentRouter = require('./PaymentRouter')
// const TypeRouter = require('./TypeRouter')

const routes = (app) => {
    // app.use('/api/user', UserRouter)
    app.use('/api/jobs', JobRouter)
    // app.use('/api/order', OrderRouter)
    // app.use('/api/payment', PaymentRouter)
    // app.use('/api/type', TypeRouter)
}

module.exports = routes