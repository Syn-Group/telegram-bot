const bot = require('../App');

bot.hears(/oi/i, (ctx) => {
    ctx.reply('OI fila da puta')
})

module.exports = bot;