const Discord = require('discord.js');

module.exports = {
    commands: ['facebook', 'fb', 'page'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x8fa9ff)
            .setTitle('Instagram')
            .setDescription('Follow Steria on Facebook')
            .setURL('https://www.facebook.com/steriaplays')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            .setThumbnail('https://i.imgur.com/Ivtf7GP.png')
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}