const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['spank'],
    callback: async (message) => {
        const author = message.author;
        const user = message.mentions.members.first();
        
        const gif = [
            'https://media.giphy.com/media/6BZaFXBVPBtok/giphy.gif',
            'https://media.giphy.com/media/OdU7sLNRksbq8/giphy.gif',
            'https://media.giphy.com/media/jdrgQXu2qdL1e/giphy.gif',
            'https://media.giphy.com/media/VWIeyyUQNpFra/giphy.gif',
            'https://media.giphy.com/media/cl3EMK5vlECNO2UJr2/giphy.gif',
            'https://media.giphy.com/media/iDPv54rvXkkA8/giphy.gif'
        ]

        let index = (Math.floor(Math.random() * Math.floor(gif.length)));

        if(!user) {
            const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('You didn\'t specify a user to spank :cry: \n Maybe you can try spanking yourself')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(embed)
        }

        if(user) {
            if (author.username == user.user.username) return message.reply("Damn, so you're that horny...")
            const spank = new MessageEmbed()
            .setDescription(`${author.username} just spanked ${user.user.username}, so hawt 😫`)
            .setImage(gif[index])
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(spank)
        }
    },
}