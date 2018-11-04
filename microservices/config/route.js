module.exports = function (app) {
    var artifactoryRoutes = require('./../app/artifactory/artifactory.route');
    var accountRoutes = require('./../app/account/account.route');

    app.use('/artifactory', artifactoryRoutes)
    app.use('/account', accountRoutes)
}