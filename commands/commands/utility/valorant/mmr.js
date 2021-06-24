const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valmmr', 'mmr'],
    callback: (message, args) => {
        let profile = args[0]
        let tag = args[1]
        let region = args[2]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valmmr [name] [tag] [region])')
        }
        if (!region) {
            region = 'na'
            message.channel.send('Because you did not set a region, it will be automatically set to NA.')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${profile}/${tag}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${profile}'s MMR`)
                .addField('Rank', response.data.data.currenttierpatched)
                .addField('Current MMR', `${response.data.data.ranking_in_tier} / 100`)
                .addField('Last MMR Change', response.data.data.mmr_change_to_last_game)
                .addField('Current Elo', response.data.data.elo)
                .setColor('RANDOM')
                    .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
                message.channel.send(embed)
            })
            .catch(function (error) {
                try {
                    let errorMessage = error.response.data.data.message
                    if (errorMessage) return message.channel.send(errorMessage)
                } catch {
                    message.channel.send('The User has not played a rank match in the last 20 Matches or queued the wrong region.')
                }
            })
    },
}