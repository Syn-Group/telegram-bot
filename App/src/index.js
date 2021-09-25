const { Bot } = require('grammy')
require('dotenv').config()

const bot = new Bot(process.env.TOKEN); 

const command_start = require('./commands/start');

const bot_middleware = require('./middlewares/bot');

bot.command("start", command_start.reply);

bot.start();