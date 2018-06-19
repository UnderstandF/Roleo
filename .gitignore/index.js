const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("&help");
    console.log("Connected");
});    

bot.login("NDU4Njk3MzcyMzQwNDUzMzc3.Dgra1w.HxOYJdu_SLTi3A9C1w7BpdAyYow")


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - &help");
}      

    if (message.content === "Salut"){
        message.reply("Salut mon pote ! ");
        console.log("Commande Salut effectué");
    }
});    
