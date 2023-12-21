const 
const {Client,IntentsBitFeild}= require("discord.js")
const client = new Client({
    intents:[
    IntentsBitFeild.Flags.Guilds,
    IntentsBitFeild.Flags.GuildMembers,
    IntentsBitFeild.Flags.GuildMessages,
    IntentsBitFeild.Falgs.MessageContent
    ]
})

client.on("ready",(c)=>{
    console.log(`my name is ${c.user.tag} im buhbuhbuhbuhbuh bad to the bone`)
})