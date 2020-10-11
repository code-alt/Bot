const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fetch = require('node-fetch');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var content = "!lookup";

  if(msg.content.includes(content) !== false){
      console.log("It works!")
      var id = msg.content.substr(8);
      fetch('https://discord.riverside.rocks/check.json.php?id='+id)
    .then(res => res.json())
    .then(json => console.log(json));
  }
});

client.login(process.env.TOKEN);