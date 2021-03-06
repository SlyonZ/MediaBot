const Discord = require("discord.js");
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];
exports.run = async (client, message, args) => {
    const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tb',
  description: 'Do a table flip !',
  usage: 'tb'
};
