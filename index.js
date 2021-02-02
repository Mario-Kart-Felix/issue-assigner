/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = app => {
  app.log.info('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const {payload, octokit} = context

    if (payload.issue.assignees.length > 0) return

    const {maintainers} = await context.config('issue-assigner.yml')

    if (maintainers && maintainers.length > 0) {
      const maintainerIndex = payload.issue.number % maintainers.length
      await octokit.issues.addAssignees(context.issue({assignees: [maintainers[maintainerIndex]]}))
    }
  })
}