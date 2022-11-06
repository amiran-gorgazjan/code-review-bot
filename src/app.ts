import type { Probot } from 'probot'
import slack from 'slack'

const token = process.env['SLACK_TOKEN']
const channel = process.env['SLACK_CHANNEL']

const CodeReviewBot = (app: Probot) => {
    app.on('pull_request.opened', async context => {
        const { title, html_url, user } = context.payload.pull_request
        const { login } = user

        const message = `New pull request: ${title} - ${html_url} (by @${login})`

        await slack.chat.postMessage({
            token,
            channel,
            text: message
        })
    })
}
export default CodeReviewBot