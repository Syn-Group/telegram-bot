const bot = require('./Receiver')

const startup = async () => {
    await bot.start({
        onStart: client => {
            console.log(`${new Date()} logged in @${client.username}`)
        }
    })
}

startup();