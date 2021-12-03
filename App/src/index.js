const { Bot } = require('grammy')
require('dotenv').config()

const bot = new Bot(process.env.TOKEN); 

const command_start = require('./commands/start');
const command_ban = require('./commands/ban');

const middleware_bot = require('./middlewares/bot');
const middleware_permsision = require('./middlewares/permission'); 

bot.command("start", middleware_bot.temp, command_start.reply);
bot.command("ban", middleware_bot.temp, middleware_bot.action, middleware_permsision.ban, command_ban.action)

bot.start();