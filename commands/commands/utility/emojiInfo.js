const Discord = require('discord.js')

module.exports = {
    commands: ['emojiinfo', 'emoji-info'],
    callback: async (message, args, client) => {
        if (!args[0]) return message.reply('Please give an emoji name or id')
        let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0] || emoji.id === args[0] || emoji == args[0].replace(/([^\d])+/gim, ''));
        if (!emoji) return message.reply('Invalid emoji. Please make sure this emoji is from the server.')
        let a = null
        let x = "`"
        let galaxy;
        let link;
        let name = emoji.name
        let id = emoji.id
        let link1 = `https://cdn.discordapp.com/emojis/${id}`
        if (emoji.animated === true) {
            galaxy = `<a:${name}:${emoji.id}>`
            link = link1 + ".gif"
        } else {
            galaxy = `<:${name}:${emoji.id}>`
            link = link1 + ".png"
        }
        let mention = galaxy
        const b = new Discord.MessageEmbed()
            .setTitle(`Emoji info!`)
            .setThumbnail(link)
            .addFields(
                { name: "Emoji:", value: emoji, inline: false },
                { name: "Mention:", value: x + mention + x, inline: false },
                { name: "Name:", value: x + name + x, inline: true },
                { name: "Id:", value: x + id + x, inline: true },
                { name: "Animated:", value: emoji.animated ? "Animated" : "Not Animated", inline: false }
            )
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
        b.setURL(link)
        b.setColor('RANDOM')
        message.channel.send(b)
    }
}