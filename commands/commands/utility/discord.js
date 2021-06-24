const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['discord'],
    callback: async (message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Steria Secretbase')
        .setAuthor(message.member.displayName, message.member.user.displayAvatarURL())
        .setURL('https://discord.com/invite/Py3tm2EnkC')
        .setDescription('Join the Discord support server!')
        .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
        .setColor('RANDOM')
        message.channel.send(embed)
    },
}