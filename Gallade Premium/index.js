const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NTE1Mjc0ODY5OTUzMzk2NzY2.Dtiu4w._W_xnOGnKK_EUCI0NbO2BTBGAFo');
bot.on('ready', () => {
    bot.user.setStatus('available')
    const newLocal = 'Status';
    bot.user.setPresence({
        game: {
            name: "with Mimikyu [Level 100]",
            type: "STREAMING",
            url: "https://www.twitch.tv/heromariogx"
        }
    });
});
bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('gb!kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('gb!ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: '[Banned via Gallade[BOT] <--|-|--> Duration: Permanent]',
          }).then(() => {
            message.reply(`<:Banned1:514919898804125716> <:Banned2:514919898645004289> **Successfully banned ${user.tag}** <:Banned1:514919898804125716> <:Banned2:514919898645004289>`);
          }).catch(err => {
            message.reply('¯\_(ツ)_/¯I was unable to ban the member ¯\_(ツ)_/¯');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply(':warning: You didn\'t mention the user to ban! :warning:');
      }
    }
  });