// Require the adapter
const core = require('@actions/core')
const runProbot = require('probot-actions-adapter')

// Require your Probot app's entrypoint, usually this is just index.js
const app = require('./index')

// Set the maintainers so Probot doesn't have to fetch them from a separate file.
process.env.ISSUE_ASSIGNER__MAINTAINERS = core.getInput('maintainers') || ''
process.env.GITHUB_TOKEN = process.env.GITHUB_TOKEN || core.getInput('GITHUB_TOKEN') || ''

// Adapt the Probot app for Actions
// This also acts as the main entrypoint for the Action
runProbot(app)
