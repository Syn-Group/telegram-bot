const { Bot } = require('grammy');
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname + "/.env")
})

const bot = new Bot(process.env.TOKEN); 

module.exports = bot;