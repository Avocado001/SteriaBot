const Discord = require('discord.js');

module.exports = {
    commands: ['rules', 'rule'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x12ffff)
            .setTitle('Server Rules')
            .setDescription('1st Offense: Warning \n 2nd Offense: 3hr Mute \n 3rd Offense: Kick (Can Only Be Invited Back By Moderator) \n 4th Offense: Ban \n ')
            .addField('Rule #1', 'No racial slurs (immediate permanent ban & no n-word variations).')
            .addField('Rule #2', 'No spamming gifs or words.')
            .addField('Rule #3', 'No repetitve profanity.')
            .addField('Rule #4', 'Don\'t be toxic (Don\'t attack people personally).')
            .addField('Rule #5', 'No begging for higher roles (Server rank does not directly correspond to roles).')
            .addField('Rule #6', 'Do not ping anyone unless necessary.')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}