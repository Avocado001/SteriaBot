const { MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports = {
    commands: ['pause'],
    callback: async (message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            try {
                serverQueue.connection.dispatcher.pause()
            } catch (error) {
                message.client.queue.delete(message.guild.id);
                return sendError(`The player has stopped and the queue has been cleared.: ${error}`, message.channel);
            }
            let xd = new MessageEmbed()
                .setDescription("⏸ Paused the music for you!")
                .setColor("YELLOW")
                .setTitle("Music has been paused!")
                .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            return message.channel.send(xd);
        }
        return sendError("There is nothing playing in this server.", message.channel);
    },
}