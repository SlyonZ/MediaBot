const Discord = require("discord.js");
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("you can't kiss nobody")
      let user = message.guild.member(message.mentions.users.first());
        snekfetch.get('https://nekos.life/api/kiss')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user} s'est fait embrasser par ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            })).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kiss',
  description: 'Embrasse une personne',
  usage: 'Kiss [User]'
};
