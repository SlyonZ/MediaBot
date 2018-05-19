module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} n'est plus perma héhé !`);
};
