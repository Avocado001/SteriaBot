const { MessageEmbed } = require("discord.js")

/**
 * @param {String} text 
 * @param {TextChannel} channel 
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
    await channel.send(embed)
}