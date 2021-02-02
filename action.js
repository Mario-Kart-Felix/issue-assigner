// Require the adapter
const runProbot = require('probot-actions-adapter')

// Require your Probot app's entrypoint, usually this is just index.js
const app = require('./index')

// Adapt the Probot app for Actions
// This also acts as the main entrypoint for the Action
runProbot(app)
