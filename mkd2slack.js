const {readFileSync} = require('fs')
const {WebClient} = require('@slack/client')
const md = require('markdown-it')()
const mrkdwn = require('html-to-mrkdwn')
function md2mrkdwn(textInMd) { return mrkdwn(md.render(textInMd)).text }

const config = JSON.parse(readFileSync('config.json', 'utf8'))
const channelId = config.channelId
const slackToken = config.token
const web = new WebClient(slackToken)

const text = md2mrkdwn(readFileSync('agenda.md', 'utf8'))
web.chat.postMessage({
  channel : channelId,
  text,
})
