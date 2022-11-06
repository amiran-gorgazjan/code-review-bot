# Git Code Review Bot

# Heroku secrets

```bash
heroku config:set APP_ID=aaa
heroku config:set WEBHOOK_SECRET=bbb
heroku config:set PRIVATE_KEY="$(cat ~/Downloads/*.private-key.pem)"
```