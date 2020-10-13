const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fetch = require('node-fetch');
let jsoning = require('jsoning');
let database = new jsoning("sql.json");


client.on('ready', () => {
  console.log(`You're logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var content = "!lookup";

  if(msg.content.includes(content) !== false){
      var id = msg.content.substr(8);
      console.log(id+" was requested.")
      fetch('https://discord.riverside.rocks/check.json.php?id='+id)
    .then(res => res.json())
    .then(json => {

    
        if(json.reports !== ""){
            if(typeof json.reports == 'undefined'){
                msg.reply("I can't read how much reports this user has, because of an error. The person might not exist.")
            }else{
                msg.reply(`User requested has **${json.reports}** reports and has an abuse score of **${json.score}**. See more about ths user at https://discord.riverside.rocks/check?id=${id} . If you feel that this user is abusive, please report them at https://discord.riverside.rocks/report?id=${id} .`)
            }
        }else{
            msg.reply("Invalid user. Maybe there was an error?")
        }
    })

  }
  var content = "!report";

  if(msg.content.includes(content) !== false){
    var id = msg.content.substr(8);
    (async() => {
      if(db.has(message.guild.id)){
        if(message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')){ // i personally believe that using ! is a bad practice
         
        }else{
         msg.reply("We are so sorry, but you do not have the permission to do this. https://http.cat/401")
        }
      }else{
        if(id == ""){
          msg.reply("This server does not have an API key assciated with it. In a secure channel where NO ONE ELSE is there, please use with command with your API key. (ex. `!report abcdefg`) To get your accounts API Key, sign in at https://discord.riverside.rocks/login to view it on the dashboard.");
        }else{
          await db.push(message.guild.id, id);
          msg.reply("Your API key has been saved to our database.");
        }
      }
    })
  }
});

client.login(process.env.TOKEN);
