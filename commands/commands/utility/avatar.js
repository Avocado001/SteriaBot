const Discord = require('discord.js');

module.exports = {
  commands: ['avatar', 'pfp', 'profilepicture'],
  callback: async (message) => {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({ dynamic: true, size: 1024 })
    const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s Avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
    message.channel.send(embed);
  },
}