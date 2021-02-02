async function getMaintainers(context) {
  if (process.env.ISSUE_ASSIGNER__MAINTAINERS) {
    return process.env.ISSUE_ASSIGNER__MAINTAINERS.split(',')
  }

  const {maintainers} = await context.config('issue-assigner.yml')
  return maintainers
}

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = app => {
  app.log.info('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const {payload} = context
    const octokit = await app.auth({token: process.env.GITHUB_TOKEN})

    if (payload.issue.assignees.length > 0) return

    const maintainers = await getMaintainers()
    app.log.info(`Using maintainer list: ${JSON.stringify(maintainers)}`)

    if (maintainers && maintainers.length > 0) {
      const maintainerIndex = payload.issue.number % maintainers.length
      await octokit.issues.addAssignees(context.issue({assignees: [maintainers[maintainerIndex]]}))
    }
  })
}
