const { Telegraf } = require('telegraf');
const express = require('express');
require('dotenv').config()
const app = express();
 const token = process.env.BOT_TOKEN;
//  const port = process.env.PORTS;
// Bot setup
const bot = new Telegraf(token);

// Start command
bot.start((ctx) => {
  ctx.reply('Hello World!', {
    reply_markup: {
      keyboard: [
        [
          { text: 'Web App', web_app: { url: 'https://appfyl.vercel.app' } }
        ], [
          { text: 'Share Phone Number', request_contact: true },
          { text: 'Location', request_location: true }
        ]
      ],
    },
  });
});

// Launch the bot
bot.launch();

// Create a web server
const PORT = process.env.PORT || 3000; // Choose port 3000 or the one set in the environment

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
