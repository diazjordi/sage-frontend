var express = require('express');
var app = module.exports = express();

var CONFIG = require('config');
var log = require('./lib/shared/helpers/log_helper')('app.js');
var middleware = require('./lib/shared/middleware');


// public assets
var favicon = require('serve-favicon');
app.use('/dist', express.static(__dirname + '/public/dist'));
app.use('/coverage', express.static(__dirname + '/public/coverage/lcov-report'));
app.use(favicon(__dirname + '/public/dist/images/favicon.ico'));


// set the number of concurrent sockets per host
var http = require('http');
http.globalAgent.maxSockets = CONFIG.app.httpMaxSockets;


// modules
var healthCheck = require('./lib/health_check');
var errors = require('./lib/errors');
var home = require('./lib/home');
var auditHistory = require('./lib/audit_history');
var admin = require('./lib/admin');
var clicks = require('./lib/clicks');
var pages = require('./lib/pages');
var impressions = require('./lib/impressions');
var contentPartners = require('./lib/content_partners');

app.use(healthCheck);
app.use(errors);
app.use(home);
app.use(auditHistory);
app.use(admin);
app.use(clicks);
app.use(pages);
app.use(impressions);
app.use(contentPartners);


// error handling middleware
require('./lib/shared/helpers/view_engine_helper')(app, __dirname);
app.use(middleware.errorHandler);
app.use(middleware.notFound404Error);


app.listen(CONFIG.app.port);
log.info('Listening on port ' + CONFIG.app.port);/**
 * Created by jd5582 on 8/7/14.
 */
