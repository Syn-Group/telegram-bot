const { Bot } = require('grammy');
const path = require('path');
const fs = require('fs');

require('dotenv').config({
    path: path.join(__dirname + "/.env")
})

const bot = new Bot(process.env.TOKEN);

fs.readdir("./commands/", async (err, files) => {
    const commandHandler = require("./handlers/commands");
    await commandHandler(err, files, bot);
});
fs.readdir("./events/", async (err, files) => {
    const eventHandler = require("./handlers/events");
    await eventHandler(err, files, bot);
});

module.exports = bot;