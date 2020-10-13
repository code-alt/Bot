const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fetch = require('node-fetch');
let jsoning = require('jsoning');
let database = new jsoning("sql.json");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
                msg.reply("Invalid user.")
            }else{
                msg.reply("User requested has **"+json.reports+"** reports and has an abuse score of **"+json.score+"** If you feel that this user is abusive, please report them at https://discord.riverside.rocks/report?id="+id)
            }
        }else{
            msg.reply("Invalid user.")
        }
    })

  }
  var content = "!report";

  if(msg.content.includes(content) !== false){
    var id = msg.content.substr(8);
  }
});

client.login(process.env.TOKEN);