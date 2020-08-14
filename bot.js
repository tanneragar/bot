const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login("NjcxMjQ0MjQxOTE3MzEzMDI0.Xi6G6g.IA65dbcwuCpQi1mzZmelmxFXRFY");//BOT_TOKEN is the Client Secr
