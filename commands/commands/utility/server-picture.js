const {MessageEmbed} = require('discord.js')

module.exports = {
    commands: ['serverpicture', 'server-picture'],
    callback: async (message, args, client) => {
        const embed = new MessageEmbed()
        .setTitle('Server Picture')
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        .setColor('RANDOM')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
        message.channel.send(embed)
    }
}