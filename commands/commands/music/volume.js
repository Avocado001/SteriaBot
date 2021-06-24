const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['volume', 'vol'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
        if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
        if (isNaN(args[0])) return message.channel.send('Numbers only!').catch(err => console.log(err));
        if (parseInt(args[0]) > 150 || (args[0]) < 0) return sendError('You can\'t set the volume to more than 150 or lower than 0.', message.channel).catch(err => console.log(err));
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
        let xd = new MessageEmbed()
            .setDescription(`I set the volume to: **${args[0] / 1}/100**`)
            .setAuthor("Server Volume Manager")
            .setColor("BLUE")
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
        return message.channel.send(xd);
    },
}