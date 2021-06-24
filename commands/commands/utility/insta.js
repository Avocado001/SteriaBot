const Discord = require('discord.js');

module.exports = {
    commands: ['facebook', 'fb', 'page'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setTitle('Just Twaisu')
            .setURL('https://www.facebook.com/steriaplays')
            .setAuthor('Steria' , 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/187845552_167251435403889_764366581181602099_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhoIqujwveAAX-_W-Cn&tn=8c86R4RZ0HvKHvY_&_nc_ht=scontent.fmnl8-2.fna&oh=9be4d5da946295ae95bcb31451656b96&oe=60D97EA1')
            .setDescription('Please Like and Follow the Page!')
            .setColor('#FF2D00')
            .setThumbnail('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/187845552_167251435403889_764366581181602099_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhoIqujwveAAX-_W-Cn&tn=8c86R4RZ0HvKHvY_&_nc_ht=scontent.fmnl8-2.fna&oh=9be4d5da946295ae95bcb31451656b96&oe=60D97EA1')
            .setImage('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/187459167_169230948539271_2601612494169101438_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=o575k65aYxkAX_tAMK2&tn=8c86R4RZ0HvKHvY_&_nc_ht=scontent.fmnl8-2.fna&oh=7dc0dcbb2ae4ffa2884a06a41a2aff2c&oe=60D9F942')
            .setFooter('Please Like, Follow and Share the Facebook Page!', 'https://media.discordapp.net/attachments/762874855880130621/857654753068843008/ny001.gif')
            .setTimestamp()
        
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}
