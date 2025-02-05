# trace.moe-telegram-bot

[![License](https://img.shields.io/github/license/soruly/trace.moe-telegram-bot.svg?style=flat-square)](https://github.com/soruly/trace.moe-telegram-bot/blob/master/LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/soruly/trace.moe-telegram-bot/docker-image.yml?style=flat-square)](https://github.com/soruly/trace.moe-telegram-bot/actions)
[![Docker](https://img.shields.io/docker/pulls/soruly/trace.moe-telegram-bot?style=flat-square)](https://hub.docker.com/r/soruly/trace.moe-telegram-bot)
[![Docker Image Size](https://img.shields.io/docker/image-size/soruly/trace.moe-telegram-bot/latest?style=flat-square)](https://hub.docker.com/r/soruly/trace.moe-telegram-bot)

[![Telegram](https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg)](https://telegram.me/AnimeOsint_rkbot)
![Maintained](https://img.shields.io/badge/Maintained-yes-green.svg)


This Telegram Bot can tell the anime when you send an screenshot to it


[![𝙰𝚗𝚒𝚖𝚎𝙾𝚜𝚒𝚗𝚝](https://raw.githubusercontent.com/RKgroupkg/AnimeOsint-telegram-bot/refs/heads/master/Assets/images%20(10).jpeg)](https://t.me/AnimeOsint_rkbot)


## Features

- Show anime titles in multiple languages
- Telegram group support
- Image, GIF, Video, URL support (stickers are not supported)
- Video preview

## How to use

1. Start chatting with the bot [![Telegram](https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg)](https://telegram.me/AnimeOsint_rkbot)
3. Send anime screenshots (images, gif or video) directly to the bot
4. You may also forward images from other chats to the bot
5. The bot will tell you the anime, episode, and time code of it
6. It will also send you a video preview of that scene

## How to use (in group)

1. Add the bot `@AnimeOsint_rkbot` to your group
2. Reply to any group image, mention the bot with `@AnimeOsint_rkbot`
3. Wait for the bot to reply

_Note that the bot has no access to your messages before it is added to your group_

## How to host the bot on your own

If you have privacy concern, you can host the bot on your own.

Please read [Telegram's official tutorial to create a Bot](https://core.telegram.org/bots) first.

You need to disable [Privacy Mode](https://core.telegram.org/bots#privacy-mode) if you want to use your bot in group chat.

### Environment Variables

```
TELEGRAM_TOKEN=       # e.g. 111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
TELEGRAM_WEBHOOK=     # e.g. https://your.host.com/
PORT=                 # (optional) Default: 3000
TRACE_MOE_KEY=        # (optional)
ANILIST_API_URL=      # (optional) Default: https://graphql.anilist.co/
```

### Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/soruly/trace.moe-telegram-bot)

### Host with docker

Docker Image available on [Docker Hub](https://hub.docker.com/repository/docker/soruly/trace.moe-telegram-bot) or [GitHub Container Registry](https://github.com/soruly/trace.moe-telegram-bot/pkgs/container/trace.moe-telegram-bot)

```
docker run -it --rm --name trace-moe-tg-bot \
  -e TELEGRAM_WEBHOOK=https://your.host.com/ \
  -e TELEGRAM_TOKEN=111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA \
  -p 443:3000 \
  ghcr.io/soruly/trace.moe-telegram-bot:latest

```

Note that you need to configure a reverse proxy if you need HTTPS.

### Host bare-metal with Node.js

Install Node.js >= 20.12, then:

```
git clone https://github.com/soruly/trace.moe-telegram-bot.git
cd trace.moe-telegram-bot
npm install
```

- Copy `.env.example` to `.env`
- Edit `.env` as you need

```
node server.js
```

### Host bare-metal with pm2

You also can use [pm2](https://pm2.keymetrics.io/) to run this in background in cluster mode.

Use below commands to start / restart / stop server.

```
npm run start
npm run stop
npm run reload
npm run restart
npm run delete
```

To change the number of nodejs instances, edit ecosystem.config.json
