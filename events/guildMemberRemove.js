
module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Aujourd'hui ${member.user.username} nous à quitter , adieu . . . `);
};
