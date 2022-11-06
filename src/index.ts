// Tutorial about a bot that reads GitHub pull request and sends a message to Slack
// when a pull request is opened.
// https://probot.github.io/docs/hello-world/

import { createNodeMiddleware, Probot } from "probot";
import probotApp from "./app";
import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.use(createNodeMiddleware(probotApp, {
    probot: new Probot({
        appId: process.env.APP_ID,
        secret: process.env.WEBHOOK_SECRET,
        privateKey: process.env.PRIVATE_KEY,
    })
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});