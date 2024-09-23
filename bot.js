const { Telegraf } = require('telegraf');

const bot = new Telegraf('7694221895:AAEknZB295WVX8VPCl_bZ0Mo78Zz6rwYH9A');

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
      //   resize_keyboard: true, // Optional: Makes the keyboard more compact
    },
  });
});

bot.launch();
