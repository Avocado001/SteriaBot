const Discord = require('discord.js')

module.exports = {
    commands: ['report'],
    callback: async (message, args, client) => {
        if (!arguments[0]) return message.reply('You need to mention someone for this report.');

        const victim = message.mentions.users.first();
        if (!victim) return message.channel.send('I cannot seem to find this Member inside of this guild.');

        const guildOwner = message.guild.owner 
        const guildBot = client.user 
        const messageAuthor = message.author 

        if (victim === guildOwner) {
            return message.channel.send('You cannot try report the Owner of this guild.');
        } else if (victim === guildBot) { 
            return message.channel.send('You cannot try to report the Bot of this guild.');
        } else if (victim === messageAuthor) { 
            return message.channel.send('You cannot try to report yourself.');
        }

        const reportMessage = args.slice(1).join(' ');
        if (!reportMessage) return message.reply('You need to provide a message for this report.');

        message.delete();

        const ticketLogsChannel = message.guild.channels.cache.get('857896775897055303');

        const ticketEmbed = new Discord.MessageEmbed()
            .setTitle('Ticket Log')
            .setThumbnail(message.author.displayAvatarURL())
            .setColor('RANDOM')
            .setFooter("Bot Made By Avocado#1747", "https://images-ext-1.discordapp.net/external/ra9fSXcz1iONdUpChGGSoOsUEjAZqo2WiUW2j9jepfI/https/64.media.tumblr.com/408500030215aebc97c6eeb1616e857a/59803ea79bf11ead-25/s500x750/4f5d3b13a1777d9f5f32d287087a55d1a0d8f38d.gif")
            .addFields(
                {
                    name: 'Type:',
                    value: '``Report``'
                },
                {
                    name: 'Reported:',
                    value: victim
                },
                {
                    name: 'Reporter:',
                    value: messageAuthor.tag
                },
                {
                    name: 'Message:',
                    value: reportMessage
                }
            )
        messageAuthor.send(`Thank you reporting a member in **${message.guild.name}**! Your report is successfully sent to the Staff Team. A Staff Member will come less than 24 hours to DM you, while you wait, gather evidence.\n\nYou Reported: **${victim}**\nFor the reason: **${reportMessage}**`);
        ticketLogsChannel.send(ticketEmbed);
    }
}
