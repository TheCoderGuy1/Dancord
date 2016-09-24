const discord = require("discord.js")

var Client = new discord.Client();

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

    if (input.includes("HARAMBE")) {
        if (message.sender.id == "BOTSIDHERE") return;
        TextChannel.sendMessage(message, "RIP Harambe, he will be missed :cry: https://files.danielgray.me/harambe.jpg");
    }

    if (message.content.startsWith(".playing")) {
        if (message.sender.id == "YOURIDHERE") {
            let newstatus = message.content.split(" ").slice(1).join(" ");
            Client.user.setStatus("online", newstatus)
            TextChannel.reply(message, "Status Updated!")
        } else {
            TextChannel.reply(message, "```You do not have the required permissions to run this command.```")
            console.log("Error setting status")
        }
    }

    if (input === ".GETME") {

        TextChannel.reply(message, "This is a self hosted, open-source version of dancord+. Get it at https://github.com/danielgraycode/dancord");
    }





















Client.loginWithToken(INSERTTOKENHERE)
