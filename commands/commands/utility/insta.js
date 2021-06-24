const Discord = require('discord.js');

module.exports = {
    commands: ['facebook', 'fb', 'page'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x8fa9ff)
            .setTitle('Facebook Page')
            .setDescription('Follow Steria on Facebook')
            .setURL('https://www.facebook.com/steriaplays')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            .setThumbnail('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/187845552_167251435403889_764366581181602099_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhoIqujwveAAX-_W-Cn&_nc_ht=scontent.fmnl8-2.fna&oh=aa31941690f18606498ffd7cca2855e2&oe=60D97EA1')
            .ssetImage('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-0/p180x540/187459167_169230948539271_2601612494169101438_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=o575k65aYxkAX_tAMK2&_nc_ht=scontent.fmnl8-2.fna&tp=6&oh=eb44a42e4e765ed8c3c6fbb1063bcfaa&oe=60DA89A8')
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}
