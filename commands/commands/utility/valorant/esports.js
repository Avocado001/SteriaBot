const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valesports', 'val-esports'],
    callback: (message, args) => {
        axios.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=esports`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valorant Esport Updates')
                .addField(response.data.data[0].title, response.data.data[0].url)
                .addField(response.data.data[1].title, response.data.data[1].url)
                .addField(response.data.data[2].title, response.data.data[2].url)
                .setThumbnail(response.data.data[0].banner_url)
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send('Something went wrong, please try again later.')
            })
    },
}