const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    commands: ['qr', 'qrcode', 'qr-code'],
    callback: async (message, args) => {
        let weblink = (args[0])
        let link = `http://api.qrserver.com/v1/create-qr-code/?data=${weblink}&size=200x200`

        if (!weblink) return message.channel.send('Please provide a link.')
        if (require('is-url')(weblink)) {
            const attachment = new MessageAttachment(link, 'qrcode.png');
            const embed = new MessageEmbed()
                .setTitle(`Generated QRCode!`)
                .attachFiles(attachment)
                .setColor('RANDOM')
                .setImage('attachment://qrcode.png')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(embed);
        } else { message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!'); }
    }
}   