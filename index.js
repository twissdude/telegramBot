const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Replace YOUR_TOKEN with the token you got from BotFather
const bot = new TelegramBot('7529025426:AAFUS0KUdvSeeyAjGu3RDo1SMvKBeMJ4fCc', { polling: true });

const app = express();

// Sign up command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Welcome! Please sign up by providing your name.");
});

// Capture the user's name
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text !== '/start') {
        // Store user information or process the sign-up
        bot.sendMessage(chatId, `Thank you, ${text}! Here is the link to the YouTube page: https://www.youtube.com/channel/ibrandtv-m`);
    }
});

// Serve a simple page (optional)
app.get('/', (req, res) => {
    res.send('Telegram Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
