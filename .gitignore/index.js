const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("&help");
    console.log("Connected");
});    

bot.login(process.env.TOKEN)


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - &help");
}      

    if (message.content === "Salut"){
        message.reply("Salut mon pote ! ");
        console.log("Commande Salut effectué");
    }
});    
