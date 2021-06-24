const Discord = require('discord.js');

module.exports = {
    commands: ['valmaps', 'valorantmaps', 'valorant-maps', 'valmap', 'map', 'valorantmap'],
    callback: (message, args) => {
        let mapName = message.content.substring(message.content.indexOf(' ') + 1);
        mapName = mapName.toLowerCase()
        if (!args[0]) return message.channel.send('Please provide a valid map.')
        if (mapName.includes('ascent')) {
            const ascent = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Ascent')
                .setURL('https://blitz.gg/valorant/maps/ascent')
                .setImage('https://i.imgur.com/BB0K2AI.png')
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(ascent)
        }

        if (mapName.includes('bind')) {
            const bind = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Bind')
                .setURL('https://blitz.gg/valorant/maps/bind')
                .setImage('https://i.imgur.com/PNuTJl5.png')
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(bind)
        }

        if (mapName.includes('haven')) {
            const haven = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Haven')
                .setURL('https://blitz.gg/valorant/maps/haven')
                .setImage('https://i.imgur.com/I2TUFhy.png')
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(haven)
        }

        if (mapName.includes('split')) {
            const split = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Split')
                .setURL('https://blitz.gg/valorant/maps/split')
                .setImage('https://i.imgur.com/OMHAW47.png')
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(split)
        }

        if (mapName.includes('ice') || mapName.includes('box')) {
            const icebox = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Ice Box')
                .setURL('https://blitz.gg/valorant/maps/icebox')
                .setImage('https://i.imgur.com/PDhlT5o.png')
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(icebox)
        }
    },
}