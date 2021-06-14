const Discord = require('discord.js');

const client =  new Discord.Client() ;

client.login('');

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('Online');
}

client.on('message' , gotMessage);

function gotMessage(msg){
    console.log(msg.content);
    //if(msg.content === "tu"){
    msg.channel.send(`@everyone DevanshuDaddy https://discord.gg/BX76hDvGwg`)
    }
   




