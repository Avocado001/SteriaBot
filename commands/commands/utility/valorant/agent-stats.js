const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['agentstats', 'valagentstats'],
    callback: (message, args) => {
        const profile = args[0]
        const tag = args[1]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v2/profile/${profile}/${tag}`)
            .then(function (response) {
                let kd1 = response.data.agents[0].kills / response.data.agents[0].deaths
                kd1 = kd1.toFixed(2)
                let kd2 = response.data.agents[1].kills / response.data.agents[1].deaths
                kd2 = kd2.toFixed(2)
                let kd3 = response.data.agents[2].kills / response.data.agents[2].deaths
                kd3 = kd3.toFixed(2)
                let kd4 = response.data.agents[3].kills / response.data.agents[3].deaths
                kd4 = kd4.toFixed(2)
                let kd5 = response.data.agents[4].kills / response.data.agents[4].deaths
                kd5 = kd5.toFixed(2)
                let kd6 = response.data.agents[5].kills / response.data.agents[5].deaths
                kd6 = kd6.toFixed(2)

                let hs1 = (response.data.agents[0].headshots / response.data.agents[0].kills) 
                hs1 = hs1.toFixed(2) * 100
                let hs2 = (response.data.agents[1].headshots / response.data.agents[1].kills)
                hs2 = hs2.toFixed(2) * 100
                let hs3 = (response.data.agents[2].headshots / response.data.agents[2].kills) 
                hs3 = hs3.toFixed(2) * 100
                let hs4 = (response.data.agents[3].headshots / response.data.agents[3].kills)
                hs4 = hs4.toFixed(2) * 100 
                let hs5 = (response.data.agents[4].headshots / response.data.agents[4].kills)
                hs5 = hs5.toFixed(2) * 100
                let hs6 = (response.data.agents[5].headshots / response.data.agents[5].kills) 
                hs6 = hs6.toFixed(2) * 100

                const embed = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Agent Stats`)
                .addField(response.data.agents[0].agent, `
                **Playtime**: ${response.data.agents[0].playtime.playtimepatched}
                **Matches**: ${response.data.agents[0].matches}
                **Kills**: ${response.data.agents[0].kills}
                **Deaths**: ${response.data.agents[0].deaths}
                **Assists**: ${response.data.agents[0].assists}
                **K/D**: ${kd1}
                **Headshots**: ${response.data.agents[0].headshots}
                **Headshot Percentage**: ${hs1}
                **Wins**: ${response.data.agents[0].wins}
                **Win Percentage**: ${response.data.agents[0].winpercentage}
                **First Bloods**: ${response.data.agents[0].firstbloods}
                **Aces**: ${response.data.agents[0].aces}
                **Clutches**: ${response.data.agents[0].clutches}
                **Flawless Rounds**: ${response.data.agents[0].flawless}
                `, true)
                .addField(response.data.agents[1].agent, `
                **Playtime**: ${response.data.agents[1].playtime.playtimepatched}
                **Matches**: ${response.data.agents[1].matches}
                **Kills**: ${response.data.agents[1].kills}
                **Deaths**: ${response.data.agents[1].deaths}
                **Assists**: ${response.data.agents[1].assists}
                **K/D**: ${kd2}
                **Headshots**: ${response.data.agents[1].headshots}
                **Headshot Percentage**: ${hs2}
                **Wins**: ${response.data.agents[1].wins}
                **Win Percentage**: ${response.data.agents[1].winpercentage}
                **First Bloods**: ${response.data.agents[1].firstbloods}
                **Aces**: ${response.data.agents[1].aces}
                **Clutches**: ${response.data.agents[1].clutches}
                **Flawless Rounds**: ${response.data.agents[1].flawless}
                `, true)
                .addField(response.data.agents[2].agent, `
                **Playtime**: ${response.data.agents[2].playtime.playtimepatched}
                **Matches**: ${response.data.agents[2].matches}
                **Kills**: ${response.data.agents[2].kills}
                **Deaths**: ${response.data.agents[2].deaths}
                **Assists**: ${response.data.agents[2].assists}
                **K/D**: ${kd3}
                **Headshots**: ${response.data.agents[2].headshots}
                **Headshot Percentage**: ${hs3}
                **Wins**: ${response.data.agents[2].wins}
                **Win Percentage**: ${response.data.agents[2].winpercentage}
                **First Bloods**: ${response.data.agents[2].firstbloods}
                **Aces**: ${response.data.agents[2].aces}
                **Clutches**: ${response.data.agents[2].clutches}
                **Flawless Rounds**: ${response.data.agents[2].flawless}
                `, true)
                .addField(response.data.agents[3].agent, `
                **Playtime**: ${response.data.agents[3].playtime.playtimepatched}
                **Matches**: ${response.data.agents[3].matches}
                **Kills**: ${response.data.agents[3].kills}
                **Deaths**: ${response.data.agents[3].deaths}
                **Assists**: ${response.data.agents[3].assists}
                **K/D**: ${kd4}
                **Headshots**: ${response.data.agents[3].headshots}
                **Headshot Percentage**: ${hs4}
                **Wins**: ${response.data.agents[3].wins}
                **Win Percentage**: ${response.data.agents[3].winpercentage}
                **First Bloods**: ${response.data.agents[3].firstbloods}
                **Aces**: ${response.data.agents[3].aces}
                **Clutches**: ${response.data.agents[3].clutches}
                **Flawless Rounds**: ${response.data.agents[3].flawless}
                `, true)
                .addField(response.data.agents[4].agent, `
                **Playtime**: ${response.data.agents[4].playtime.playtimepatched}
                **Matches**: ${response.data.agents[4].matches}
                **Kills**: ${response.data.agents[4].kills}
                **Deaths**: ${response.data.agents[4].deaths}
                **Assists**: ${response.data.agents[4].assists}
                **K/D**: ${kd5}
                **Headshots**: ${response.data.agents[4].headshots}
                **Headshot Percentage**: ${hs5}
                **Wins**: ${response.data.agents[4].wins}
                **Win Percentage**: ${response.data.agents[4].winpercentage}
                **First Bloods**: ${response.data.agents[4].firstbloods}
                **Aces**: ${response.data.agents[4].aces}
                **Clutches**: ${response.data.agents[4].clutches}
                **Flawless Rounds**: ${response.data.agents[4].flawless}
                `, true)
                .addField(response.data.agents[5].agent, `
                **Playtime**: ${response.data.agents[5].playtime.playtimepatched}
                **Matches**: ${response.data.agents[5].matches}
                **Kills**: ${response.data.agents[5].kills}
                **Deaths**: ${response.data.agents[5].deaths}
                **Assists**: ${response.data.agents[5].assists}
                **K/D**: ${kd6}
                **Headshots**: ${response.data.agents[5].headshots}
                **Headshot Percentage**: ${hs6}
                **Wins**: ${response.data.agents[5].wins}
                **Win Percentage**: ${response.data.agents[5].winpercentage}
                **First Bloods**: ${response.data.agents[5].firstbloods}
                **Aces**: ${response.data.agents[5].aces}
                **Clutches**: ${response.data.agents[5].clutches}
                **Flawless Rounds**: ${response.data.agents[5].flawless}
                `, true)
                .setThumbnail(response.data.stats.playercard)
                .setColor('RANDOM')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send(error.response.data.message)
                message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
            })
    },
}