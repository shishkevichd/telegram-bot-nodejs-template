import TelegramBot from "node-telegram-bot-api"

import onStart from "./source/commands/onStart.js"
import onError from "./source/events/onError.js"

import { useConfigStore } from "./source/stores/useConfigStore.js"

const index = () => {
    const bot = new TelegramBot(useConfigStore.getState().botToken)

    bot.onText(/\/start/, (message) => onStart(bot, message))
    bot.on("polling_error", (err) => onError(bot, message))

    bot.startPolling()
}

index()