# Git Code Review Bot

# Heroku secrets

Check 1pass for correct secrets

__Github__
```bash
heroku config:set APP_ID=aaa
heroku config:set WEBHOOK_SECRET=bbb
heroku config:set PRIVATE_KEY="$(cat ~/Downloads/*.private-key.pem)"
```

__Slack__
```bash
heroku config:set SLACK_TOKEN=ccc
heroku config:set SLACK_CHANNEL=ddd
```