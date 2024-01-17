import TelegramBot from "node-telegram-bot-api"

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)

bot.onText(/\/start/, (message) => bot.sendMessage(message.chat.id, `Hello world!`))

bot.startPolling()