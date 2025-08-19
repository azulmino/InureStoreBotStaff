const {
    Client,
    GatewayIntentBits,
    Events,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.TOKEN; 

// ==================== DATOS DE PAGO ====================
const NEQUI_ALIAS = "3164381003"; 
const NEQUI_NOMBRE = "**Mig Pel.**"; 

const UALA_ALIAS = "inure.ar.uala";
const UALA_CVU = "0000007900204470190791";
const UALA_NOMBRE = "**Mateo Valentin Lauman**"; 

const MSG_GRANDE = `
🩷 Muchas gracias por tu compra, te agradecería que dejes tu reseña en https://discord.com/channels/1193400722906165298/1221518007835168819

❕ También te pedimos que te unas a nuestros grupos de Roblox ya que si estas por 14 días podremos enviarte Robux de forma instantánea y sin que tengas que esperar

Grupo 1: https://www.roblox.com/es/communities/35983303
Grupo 2: https://www.roblox.com/es/communities/35983311
Grupo 3: https://www.roblox.com/es/communities/767157499
Grupo 4: https://www.roblox.com/es/communities/35983320
Grupo 5: https://www.roblox.com/es/communities/36092526
Grupo 6: https://www.roblox.com/es/communities/35983328 `;
// =======================================================

client.once(Events.ClientReady, bot => {
    console.log(`Bot A conectado como ${bot.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    // Panel Nequi
    if (message.content === ",") {
        
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }
        
        await message.delete();
        
        const embed = new EmbedBuilder()
            .setTitle("💳 Datos de pago - Nequi")
            .addFields(
                { name: "Alias", value: `\`\`\`${NEQUI_ALIAS}\`\`\``, inline: false },
                { name: "Titular", value: NEQUI_NOMBRE, inline: false }
            )
            .setColor("Green");

        message.channel.send({ embeds: [embed] });
    }

    // Panel Ualá
    if (message.content === ".") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }
        
        await message.delete();
        
        const embed = new EmbedBuilder()
            .setTitle("💳 Datos de pago - Ualá")
            .addFields(
                { name: "Alias", value: `\`\`\`${UALA_ALIAS}\`\`\``, inline: false },
                { name: "CVU", value: `\`\`\`${UALA_CVU}\`\`\``, inline: false },
                { name: "Titular", value: UALA_NOMBRE, inline: false }
            )
            .setColor("Green");

       message.channel.send({ embeds: [embed] });
    }

    // Panel Mensaje grande
    if (message.content === "msg") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }
        
        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle("🎉 Robux enviados")
            .setDescription(MSG_GRANDE)
            .setColor("Blue");

        await message.channel.send({ embeds: [embed] });
    }
});

client.login(TOKEN);
