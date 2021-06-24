const { MessageEmbed } = require('discord.js')
const animeQuotes = require('animequotes')
const KITSU = require('node-kitsu')

module.exports = {
    commands: ['animequote', 'anime-quote'],
    callback: async (message) => {
        let quote;
        
        quote = animeQuotes.randomQuote();

        if (quote.length > 1) {
            quote = quote[Math.floor(Math.random() * (quote.length - 1))]
        }

        message.channel.send('Generating quote...')
        KITSU.searchAnime(quote.anime, 0).then(async results => {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .addField(`Quoted from ${quote.anime}`, `**"${quote.quote}"**\n\n-*${quote.name}*`)
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")

            if (!results) {
            } else if (!results[0].attributes) {
            } else if (!results[0].attributes.coverImage) {
            } else if (!results[0].attributes.coverImage.original) {
            } else embed.setImage(results[0].attributes.coverImage.original)

            const sent = await message.channel.send(embed)
            let reactions = ['👍', '👎'];
            for (let i = 0; i < reactions.length; i++) await sent.react(reactions[i]);
        })
    }
}
