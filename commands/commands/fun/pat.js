const Discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = {
    commands: ['pat'],
    callback: async (message, client) => {
        let imgKiss = await snpm.pat();
        let slaps = [imgKiss];
        let slapR = slaps[Math.floor(Math.random() * slaps.length)];
        let personslap = message.mentions.members.first();
        let quote = ['Happy now?', 'UwU', "I will always be here to pat you!", 'Very wholesome!', 'AWWWWWWWWWWWW!', 'How cute'];
        let quoter = quote[Math.floor(Math.random() * quote.length)];

        if (!personslap) {
            let personslap = 'nobody';

            let embed = new Discord.MessageEmbed()
                .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
                .setImage(slapR)
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(embed);
            return;
        }

        if (personslap.id === message.author.id) {
            let personslap = 'them own damnselves!';
            let embed = new Discord.MessageEmbed()
                .setDescription(`**<@${message.author.id}> just patted ${personslap}! I think they are on serious need of affection!**`)
                .setImage(slapR)
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            message.channel.send(embed);
            return;
        }

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor('RANDOM')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
        message.channel.send(embed);
    }
}