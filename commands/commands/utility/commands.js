const Discord = require('discord.js');

module.exports = {
    commands: ['commands', 'help'],
    callback: async (message) => {
        let content = message.content.substring(message.content.indexOf(' ') + 1)
        content = content.toLowerCase()
        const menu = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setDescription('Welcome to Steria Secretbase Discord Server!')
            .addField('Help Categories', '`Fun`, `Utility`, `Anime`, `Music`, `Valorant`, `Moderation`, `Dev`, `NSFW`, `Setup`', true)
            .addField('Usage', '`(-help [category])`', true)
            .setColor('RANDOM')
            .setFooter("Bot Made By Avocado#1747", "https://64.media.tumblr.com/674fec8a19332cdf495a517bf912bab4/8cbd38afb32ebf1a-1c/s540x810/8f112de30862a47cd0a2a164f1dadd735e25c260.gifv")
            .setThumbnail('https://media.discordapp.net/attachments/857832409499172904/857923367733952532/image_2021-06-25_180104.png?width=677&height=677')
            .setURL('https://www.facebook.com/steriaplays')
        if (content.includes("help") || content.includes("commands")) return message.channel.send(menu)

        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .addField('Ban', 'Bans a user\n`-ban [@usertag] [reason]`', true)
            .addField('Kick', 'Kicks a user\n`-kick [@usertag] [reason]`', true)
            .addField('Poll', 'Creates a poll\n`-poll [#channelname] [Question]`', true)
            .addField('Close', 'Deletes a channel\n`-close`', true)
            .addField('Nickname', 'Changes a user nickname\n`-nickname [@usertag]`', true)
        if (content.includes("mod")) return message.channel.send(moderation)

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .addField('Meme', 'Sends a meme in the chat\n`-meme`', true)
            .addField('Roast', 'Roasts a user\n`-roast [@usertag]`', true)
            .addField('Ascii', 'Sends cool text\n`-ascii [text]`', true)
            .addField('Advice', 'Gives user advice\n`-advice`', true)
            .addField('Joke', 'Sends user a joke\n`-joke`', true)
            .addField('Coin', 'Flips a coin\n`-coin`', true)
            .addField('8ball', 'Answers a question\n`-8ball [question]`', true)
            .addField('PP', 'Sends a user\'s pp size\n`-pp [@usertag]`', true)
            .addField('RPS', 'Sends a game of rock, paper, scissors\n`-rps [choice]`', true)
            .addField('Christmas', 'Sends the amount of days until Christmas\n`-christmas`', true)
            .addField('Dog', 'Sends a picture of a dog\n`-dog`', true)
            .addField('Ship', 'Ships 2 users\n`-ship [@usertag] [@usertag]`', true)
            .addField('Pat', 'Pats a user\n`-pat [@usertag]`', true)
            .addField('Cat', 'Sends a picture of a cat\`-cat`', true)
            .addField('Hug', 'Hugs someone\n`-hug [@usertag]`', true)
            .addField('Tic-Tac-Toe', 'Sends a Tic-Tac-Toe game\n`-ttt [@usertag]`', true)
            .addField('Fast Type', 'Sends a fast type game\n`-fasttype`', true)
            .addField('Chaos Words', 'Find words in a sentence game\n`-chaoswords`', true)
            .addField('Fight', 'Fights someone\n`-fight [@usertag]`', true)
            .addField('Spank', 'Spanks a User\n`-spank [@usertag]`', true)
            .addField('Aki', 'Sends an Akinator Game\n`-aki`', true)
            .addField('PH', 'Creates a PH comment\n`-ph [text]`', true)
            .addField('Chat', 'Chats with the bot\n`-chat [message]`', true)
            .addField('Snake', 'Creates a snake game\n`-snake`', true)
        if (content.includes("fun")) return message.channel.send(fun)

        const nsfw = new Discord.MessageEmbed()
            .setTitle('NSFW')
            .setDescription('This command will only work in channels with nsfw enabled.')
            .addField('NSFW Categories', '`hass`, `hmidriff`, `pgif`, `4k`, `hentai`, `hneko`, `hkitsune`, `anal`, `hanal`, `gonewild`, `ass`, `pussy`, `thigh`, `hthigh`, `paizuri`, `tentacle`, `boobs`, `hboobs`', true)
            .addField('NSFW Command', 'Sends an nsfw image\n`-nsfw [category]`', true)
        if (content.includes("nsfw")) return message.channel.send(nsfw)

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .addField('Calc', 'Opens a calculator\n`-calc`', true)
            .addField('UserInfo', 'Gets the info of a user\n`-userinfo @usertag`', true)
            .addField('Avatar', 'Sends avatar of a user\n`-avatar [@usertag]`', true)
            .addField('Weather', 'Sends the weather forecast of a city\n`-weather [city name]`', true)
            .addField('Server Info', 'Gets the info of the server\n`-serverinfo`', true)
            .addField('Bot Info', 'Gets the info of the bot\n`-botinfo`', true)
            .addField('Ping', 'Gets the ping of the bot\n`-ping`', true)
            .addField('Emoji', 'Sends all server emojis\n`-emoji`', true)
            .addField('Verse', 'Sends a bible bible verse\n`-verse`', true)
            .addField('Emoji Info', 'Gets the info of an emoji\n`-emojiinfo [emoji or emoji name]`', true)
            .addField('Server Picture', 'Sends the pfp of the server\n`-serverpicture`', true)
            .addField('QR Code', 'Generates a QR Code for a link\n`-qr [link]`', true)
            .addField('MC', 'Sends an MC user profile\n`-mc [mc username]`', true)
            .addField('Setprefix', 'Changes the prefix of the bot\n`-setprefix [new prefix]`', true)
        if (content.includes("util")) return message.channel.send(utility)

        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .addField('Play', 'Searches Youtube and plays a song\n`-p [song name]`', true)
            .addField('Pause', 'Pauses what is playing\n`-pause`', true)
            .addField('Resume', 'Resumes what is playing\n`-resume`', true)
            .addField('Stop', 'Stops playing a song\n`-stop`', true)
            .addField('Skip', 'Skips a song\n`-skip`', true)
            .addField('Queue', 'Sends song queue\n`-queue`', true)
            .addField('Volume', 'Sets or views current volume\n`-vol [percent]`', true)
            .addField('Now Playing', 'Shows song that is currently playing\n`-np`', true)
            .addField('Leave', 'Bot will leave the vc\n`-leave`', true)
            .addField('Loop', 'Loops the music queue\n`-loop`', true)
            .addField('Lyrics', 'Sends the lyrics of a song\n`-lyrics`', true)
            .addField('Remove', 'Removes a song from the queue\n`-remove [number of song]`', true)
            .addField('Shuffle', 'Shuffles the songs in the queue\n`-shuffle`', true)
            .addField('SkipTo', 'Skips to a song in the queue\n`-skipto [number of song]`', true)
            .addField('Playlist', 'Queues a Youtube Playlist\n`-playlist [playlist name or link]`', true)
        if (content.includes("music")) return message.channel.send(music)

        const setUp = new Discord.MessageEmbed()
            .setTitle('Bot Set Up')
            .addField('SetWelcome', 'Use this command in the welcome channel to set up welcome messages\n`-setwelcome [welcome message]`\n(Please note that you can do "<@>" to send the username of the user that just joined)', true)
            .addField('SetLeave', 'Use this command in the leave channel to set up leave messages\n`-setleave [welcome message]`\n(Please note that you can do "<@>" to send the username of the user that just joined)', true)
            .addField('Support', 'Click [here](https://github.com/OblivionGhoul/KannaKamuiBot#setting-up-welcome-messages) for more info.')
        if (content.includes("setup")) return message.channel.send(setUp)

        const dev = new Discord.MessageEmbed()
            .setTitle('Developer Tools')
            .addField('Docs', 'Sends discord.js documentation\n`-docs [search query]`', true)
            .addField('Channel', 'Sends ID of channel command is used in\n`-channel`', true)
        if (content.includes("dev")) return message.channel.send(dev)

        const val = new Discord.MessageEmbed()
            .setTitle('Valorant Commands')
            .addField('Val Stats', 'Sends a player\'s Valorant Stats\n`-valstats [name] [tag]`', true)
            .addField('Val Matches', 'Sends a player\'s Last 3 Matches\n`-valmatches [name] [tag]`', true)
            .addField('Val Maps', 'Sends info of a Valorant Map\n`-valmap [map name]`', true)
            .addField('Val Agent', 'Sends info of a Valorant Agent\n`-valagent [agent name]`', true)
            .addField('Val Agent Stats', 'Sends a player\'s agent stats\n`-valagentstats [name] [tag]`', true)
            .addField('Val Map Stats', 'Sends a player\'s map stats\n`-valmapstats [name] [tag]`', true)
            .addField('Val Updates', 'Sends Information On The Latest Game Updates\n`-valupdates`', true)
            .addField('Val Announcements', 'Sends Latest Valorant Announcements\n`-valannouncements`', true)
            .addField('Val Dev', 'Sends Latest Developer Valorant Announcements\n`-valdev`', true)
            .addField('Val Esports', 'Sends Latest Esports Valorant Announcements\n`-valesports`', true)
            .addField('Val Leaderboard', 'Sends The Top 12 Players In A Region\n`-valleaderboard [region]`', true)
            .addField('Val MMR', 'Sends A Player\'s MMR\n`-valmmr [name] [tag] [region]`', true)
            .addField('Val Server Status', 'Sends Any Problems With A Valorant Server\n`-valserver [region]`', true)
        if (content.includes("val")) return message.channel.send(val)

        const anime = new Discord.MessageEmbed()
            .setTitle('Anime Commands')
            .addField('Anime Trivia', 'Sends an anime trivia question\n`-animetrivia`', true)
            .addField('Kanna', 'Sends a picture of Kanna Kamui\n`-kanna`', true)
            .addField('AnimeQuote', 'Sends a quote from a random anime\n`-animequote`', true)
            .addField('Sign', 'Creates a picture of Hifumi with a sign\n`-sign [text]`', true)
            .addField('Anime', 'Sends info about an anime\n`-anime [anime name]`', true)
        if (content.includes("anime")) return message.channel.send(anime)
    },
}
