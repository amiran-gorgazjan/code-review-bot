// Tutorial about a bot that reads GitHub pull request and sends a message to Slack
// when a pull request is opened.
// https://probot.github.io/docs/hello-world/

import { createNodeMiddleware, Probot } from 'probot'
import probotApp from './app'
import express from 'express'

const PORT = process.env['PORT'] || 3000
const APP_ID = process.env['APP_ID'] ?? 0
const PRIVATE_KEY = process.env['PRIVATE_KEY'] ?? ''
const WEBHOOK_SECRET = process.env['WEBHOOK_SECRET'] ?? ''

const app = express()

app.use(createNodeMiddleware(probotApp, {
    probot: new Probot({
        appId: APP_ID,
        privateKey: PRIVATE_KEY,
        secret: WEBHOOK_SECRET,
    })
}))

app.get('/', (_, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})