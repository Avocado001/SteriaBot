const Discord = require('discord.js')

const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    'Don\'t ask me this ever again.',
    'Don\'t worry about it.',
];

module.exports = {
    commands: ['8ball'],
    callback: async (message, question, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
            .setFooter("Bot Made By Avocado#1747", "https://images-ext-1.discordapp.net/external/ra9fSXcz1iONdUpChGGSoOsUEjAZqo2WiUW2j9jepfI/https/64.media.tumblr.com/408500030215aebc97c6eeb1616e857a/59803ea79bf11ead-25/s500x750/4f5d3b13a1777d9f5f32d287087a55d1a0d8f38d.gif")

        const error = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`Please provide a question.`)
        .setColor('RED')
            .setFooter("Bot Made By Avocado#1747", "https://images-ext-1.discordapp.net/external/ra9fSXcz1iONdUpChGGSoOsUEjAZqo2WiUW2j9jepfI/https/64.media.tumblr.com/408500030215aebc97c6eeb1616e857a/59803ea79bf11ead-25/s500x750/4f5d3b13a1777d9f5f32d287087a55d1a0d8f38d.gif")

        if (!args) return message.channel.send(error)

        message.channel.send(embed);
    },
}
