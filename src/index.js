require("dotenv").config();
const {Client,IntentsBitField}= require("discord.js")
const client = new Client({
    intents:[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    ]
})
class Message{
    constructor(content,author,server,channel){
        this._content = content
        this._author = author
        this._server = server
        this._channel = channel
    }
}
let log = []
client.on('messageCreate', (message) => {
    log.push(new Message(message.content,message.author.username,message.guild.name,message.channel.name))
    console.log(`from ${message.author.username} in ${ message.channel.name}:${message.content}`)
    if(message.content === "log"){
        console.log(log)
    }
    let channel = message.channelId
    channel.send("kys")
})
client.on('ready',(c)=>{
    console.log(`my name is ${c.user.tag} im buhbuhbuhbuhbuh bad to the bone`)
})

client.login("MTE4Njg1Njk3Mzc3NDM2MDY3Ng.GqClxo.vU864pBs3jSrJ4OBIYK7DULTH00xrno49awVe4")
