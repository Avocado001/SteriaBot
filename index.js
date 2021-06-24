require('module-alias/register')
const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')
client.queue = new Map()
require('discord-buttons')(client);
require('dotenv').config()

client.on('ready', async () => {
  try {
    console.log('I am ready!');
    function pickStatus() {
      let status = [`over ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users!`, `over ${client.guilds.cache.size.toLocaleString()} servers!`]; //change change status
      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "WATCHING"
      });
    };
    setInterval(pickStatus, 5000);
  } catch (err) {
    console.log(error)
  }

  commandBase.loadPrefixes(client)
  loadCommands(client)
  loadFeatures(client)
})

client.on('guildCreate', (guild) => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  const embed = new Discord.MessageEmbed()
    .setTitle('Thanks For Adding Me!')
    .setDescription(
      'Invite Me To Your Server [Here](https://discord.com/oauth2/authorize?client_id=857642101470265385&scope=bot&permissions=8)'
    )
    .setColor('RANDOM')
    .addField('Help', 'Use this Command get the full command list\n`-help`', true)
    .addField('SetPrefix', 'Use this Command to change the default prefix\n`-setprefix [new prefix]`', true)
      .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
      .setThumbnail('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/187845552_167251435403889_764366581181602099_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bhoIqujwveAAX-_W-Cn&tn=8c86R4RZ0HvKHvY_&_nc_ht=scontent.fmnl8-2.fna&oh=9be4d5da946295ae95bcb31451656b96&oe=60D97EA1')
      .setURL('https://www.facebook.com/steriaplays')

  channel.send(embed)
})

client.on('voiceStateUpdate', (oldState, newState) => {
  if (oldState.channelID === null || typeof oldState.channelID == 'undefined') return;
  if (newState.id !== client.user.id) return;
  return client.queue.delete(oldState.guild.id);
});

client.login(process.env.token)