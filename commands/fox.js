const Discord = require("discord.js");
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
        snekfetch.get('https://randomfox.ca/floof/')
            .then(r => message.channel.send(`Random Fox Picture :`,{
                embed: {
                    image: {
                        url: r.body.image
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
  name: 'fox',
  description: 'Affiche un renard random',
  usage: 'fox'
};
