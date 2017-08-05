const discord = require("discord.js")

const fs = require("fs");

var Client = new discord.Client();

var sbcorrection = 0

const settings = require("/Users/dangray2004/discordsettings/dancord+settings.json")

const bannedwords = require("/Users/dangray2004/discordsettings/dancord+settings.json").bannedwords

Client.on('error', function(err) {
    console.log(err)
})


Client.on("ready", function() {
    Client.user.setStatus("online", "Dancord+ running on " + Client.guilds.size + " Servers");
    console.log("Dancord+ Successfully logged in!");
});

Client.on("serverNewMember", function(server, user) {
    TextChannel.sendMessage(server.defaultChannel, "Welcome to the server! Please remember to keep to the rules, but enjoy!")
});

Client.on("message", function(message) {
    var input = message.content.toUpperCase();
    if (input === ".CREDITS") {

        TextChannel.reply(message, "This Bot was made by https://www.danielgray.me ! Give him some love and support :)");
    }
    if (input.includes("DANIEL GRAY")) {

        TextChannel.reply(message, "That is King Gray to you :sunglasses: ");
    }

    if (input.includes("HARAMBE")) {
        if (message.sender.id == "213228721287593985") return;
        TextChannel.sendMessage(message, "RIP Harambe, he will be missed :cry: https://files.danielgray.me/harambe.jpg");
    }

    if (input === ".HELP") {

        TextChannel.reply(message, "This is Dancord+, a Client made for discord servers. He is online to help you with everything, from moderating to some fun :). Type .commands for commands");
    }
    if (input === ".SHUTDOWN") {
        if (message.sender.id == "137957400765267968") {
            TextChannel.sendMessage(message, " :wave: See you next time!")
            console.log("Shutdown executed")
            process.exit();
        } else {
            TextChannel.sendMessage(message, "```Access Denied: Not Authorised to run this command.```")
        }
    }
    if (input === ".GETME") {

        TextChannel.reply(message, "Here is the link to authorise Dancord+ to your sever: https://discordapp.com/oauth2/authorize?&Client_id=213228721287593985&scope=Client ");
    }
    if (input.includes("DISCORD")) {
        if (sbcorrection == 0)
            if (message.sender.id == "137957400765267968") return;
        if (message.sender.id == "213228721287593985") return; {
            TextChannel.reply(message, "It is dixcord ")
        }
    }
    if (input === ".SBCORRECTIONOFF") {
        if (message.sender.id == "137957400765267968") {
            console.log("sbcorrection Turned Off")
            sbcorrection = 1
            TextChannel.sendMessage(message, "sbcorrections have been turned off.")
        }
    }
    if (input === ".GETME") {

        TextChannel.reply(message, "Here is the link to authorise Dancord+ to your sever: https://discordapp.com/oauth2/authorize?&Client_id=213228721287593985&scope=Client ");
    }
    if (message.content.startsWith(".playing")) {
        if (message.sender.id == "137957400765267968") {
            let newstatus = message.content.split(" ").slice(1).join(" ");
            Client.user.setStatus("online", newstatus)
            TextChannel.reply(message, "Status Updated!")
        } else {
            TextChannel.reply(message, "```You do not have the required permissions to run this command.```")
            console.log("Error setting status")
        }
    }

    if (message.content.startsWith(".deletem") && message.sender.id == "137957400765267968") {
  let deleteamount = message.content.split(" ")[1];
  Client.getChannelLogs(message.channel, deleteamount, (err, deletelogs) => {
    Client.deleteMessages(deletelogs);
    console.log("Deletem command executed");
  });
}

    bannedwords.forEach((word, index, array) => {
        if (message.sender.id == "137957400765267968") return;
        if (message.content.includes(bannedwords)) {
            console.log(message.author.id + " Said a bad word")
            TextChannel.reply(message, "That was a bad word! Your doings have been logged :eyes: ");
            message.delete();
            return;
        }
    })
    if (message.content.startsWith(".kick")) {
        if (message.sender.id == "137957400765267968") {
            {
                let userToKick = message.mentions[0];
                Client.kickMember(userToKick, message.server).catch(console.error);
                TextChannel.sendMessage(message, "Let us say goodbye to " + message.mentions);
                console.log("A member was kicked from a server running dancord+")
            }
        }
    }
    if (input === ".COMMANDS") {
        TextChannel.reply("Here is the current command list: ```.kick , .playing , .getme , .shutdown , .help , .credits , .defaultplay``` More to come soon!")
    }

    if (input === ".DEFAULTPLAY") {
        if (message.sender.id == "137957400765267968") {
            Client.user.setStatus("online", "Dancord+ running on " + Client.guilds.size + " Servers")
            TextChannel.reply(message, "Status Updated!")
        } else {
            TextChannel.reply(message, "```You do not have the required permissions to run this command.```")
            console.log("Error setting status")
        }

    }
});

Client.loginWithToken(settings.token)
