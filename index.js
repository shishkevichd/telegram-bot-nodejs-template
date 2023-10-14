const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)

bot.onText(/\/start/, (message) => {
    const currentDate = new Date().toUTCString()

    bot.sendMessage(message.chat.id, `Current UTC date: ${currentDate}`)
})

bot.startPolling()