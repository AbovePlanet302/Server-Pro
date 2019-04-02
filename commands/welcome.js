
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()

    .setTitle("Welcome to the Server!")

    .setDescription("Once you read all of these rules please go to <#556670482792054785> and say ``-agree``")

    .setTitle("RULES")

    .setDescription("• Keep the textchats to English Only. (Other languages please take to DM's / Private channels.)• Toxic behaviour is not welcome within our server.• Do not spam / shitpost within any other text channel of this server. (Only #spam)• Do not ear rape in any Voice Channel.• No discussion of illegal activities such as drugs, threats or hacking.• No talk or joking about rape, sexual harassment/abuse or along the lines. This is not tolerated at all. • No Swat/DDoS threats even if is a joke. This is not tolerated within this server.• No Sharing Bot/User Tokens / User Login Information.• No Doxing - Do not share, ask or look for the personal information of anyone inside/outside of the community.• No unsolicited links or forms of advertising within any DM or Channel within the server. • Nicknames must be able to be mentionable. (Special Character Names will be changed by Staff.)• Spoonfeeding is frowned upon, but not forbidden to do so, helping is encouraged. • NSFW content strictly not allowed within this server.All rules apply to all Voice Channels, Text channels and User DMs")



    message.channel.send(botembed);

}



module.exports.help = {

  name:"welcome"

}
