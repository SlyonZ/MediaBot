const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 2) + 1);
    if (nb == 1) {
   msg = new Discord.RichEmbed()
    .setTitle('Pile')
    .setColor('FF000')
    .setImage('https://cdn.discordapp.com/attachments/446336017851482117/447485421459603456/pile.png')
    message.channel.send(msg)
  }
  if (nb == 2) {
  msg = new Discord.RichEmbed()
    .setTitle('Face')
    .setColor('FF000')
    .setImage('https://cdn.discordapp.com/attachments/446336017851482117/447485423883649024/face.png')
    message.channel.send(msg)
  }
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'coin',
    description: 'Pile ou Face',
    usage: 'coin'
  }
