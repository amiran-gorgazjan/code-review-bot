// Tutorial about a bot that reads GitHub pull request and sends a message to Slack
// when a pull request is opened.
// https://probot.github.io/docs/hello-world/

import { run } from "probot";
import app from "./app";

run(app)