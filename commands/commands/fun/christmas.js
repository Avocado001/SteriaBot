const Discord = require("discord.js")
const axios = require('axios');

module.exports = {
    commands: ['christmas', 'christmascountdown'],
    callback: async (message, args) => {
        axios.get('https://christmas-days.anvil.app/_/api/get_days')
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle('🎄 Days Till Christmas 🎄')
                .setDescription(`${Object.values(response.data)} Days Until Christmas!`)
                .setColor('GREEN')
                .setThumbnail('https://i.imgur.com/FXW0oTi.jpg')
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
                .setTimestamp()
                message.channel.send(embed)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}