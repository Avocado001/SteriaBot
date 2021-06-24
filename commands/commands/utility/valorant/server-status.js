const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valserver'],
    callback: (message, args) => {
        let region = args[0]
        if (!region) {
            region = 'NA'
            message.channel.send('Because you did not set a region, it will be automatically set to NA. (usage: -valserver [region])')
            message.channel.send('Region List: NA, EU, AP, KR')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v1/status/${region}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${region} Valorant Server Status`)
                .addField('Maintenances', ` - ${response.data.data.maintenances}`)
                .addField('Incidents', ` - ${response.data.data.incidents}`)
                .setColor('RANDOM')
                    .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send('Please specify a valid region. (usage: -valserver [region])')
                message.channel.send('Region List: NA, EU, AP, KR')
            })
    },
}