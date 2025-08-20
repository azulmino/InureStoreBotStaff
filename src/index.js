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
            .setColor("Green");

        await message.channel.send({ embeds: [embed] });
    }
     // Panel Gag
    if (message.content === "gag") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }

        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle("📌 Instrucciones - Roblox")
            .setDescription(
                "Para continuar por favor indícanos tu usuario y luego de eso entra a nuestro servidor Privado\n\n" +
                "🔗 [Entrar al servidor](https://www.roblox.com/share?code=eca4c368cf44734f920a47a7884a3d28&type=Server)"
            )
            .setColor("Green");

        await message.channel.send({ embeds: [embed] });
    }

    // Panel Pendientes
    if (message.content === "pend") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }

        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle("💎 Robux Pendientes")
            .setDescription(
                "Ya deberías tener los robux pendientes, recordá que tardan de 3 a 7 días en estar disponibles 💗\n\n" +
                "🔗 [Ver robux pendientes](https://www.roblox.com/es/transactions)\n\n" +
                "🩷 Muchas gracias por tu compra, te agradecería que dejes tu reseña en [🤝 - feedback](https://discord.com/channels/1193400722906165298/1221518007835168819)\n\n" +
                "❕ También te pedimos que te unas a nuestros grupos de Roblox ya que si estas por 14 días podremos enviarte **Robux de forma instantánea** y sin esperar:\n\n" +
                "Grupo 1: https://www.roblox.com/es/communities/35983303\n" +
                "Grupo 2: https://www.roblox.com/es/communities/35983311\n" +
                "Grupo 3: https://www.roblox.com/es/communities/767157499\n" +
                "Grupo 4: https://www.roblox.com/es/communities/35983320\n" +
                "Grupo 5: https://www.roblox.com/es/communities/35983302\n" +
                "Grupo 6: https://www.roblox.com/es/communities/35983328"
            )
            .setColor("Green");

        await message.channel.send({ embeds: [embed] });
    }

    // Panel Guía
    if (message.content === "guia") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }

        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle("📖 Guía de acceso a la cuenta de Minecraft")
            .setDescription(
`------------------------------------------------------
## PASOS PARA INGRESAR EN LA CUENTA
1) Ir a https://www.minecraft.net/es-es/login
2) Click en iniciar sesión con Microsoft
3) Colocar el Email que te proporcionamos
4) Click "¿ha olvidado su contraseña?"
5) Click en No tengo ninguna de estas pruebas
6) Colocar el código que está adjunto al Email
7) Colocar un email de recuperación al que tengas acceso
8) Colocar el código que te enviaron a tu Email
9) Elige una contraseña nueva con la iniciaras sesión

------------------------------------------------------

## ANTES DE INICIAR SESIÓN EN EL LAUNCHER DE MINECRAFT
1) Ingresar a https://www.minecraft.net/
2) Iniciar sesión usando el email y contraseña de la cuenta
3) Click en editar nombre y elegír el nombre que quieras
4) Descargar el launcher en https://www.minecraft.net/en-us/download
5) Iniciar sesión con la cuenta que te dimos
6) ¡Listo para jugar!

------------------------------------------------------

## PASOS PARA MODIFICAR EL EMAIL
1) Ir a https://account.microsoft.com/profile y buscar la sección de Información de cuenta
2) Clickear en Editar información de la cuenta
3) Agregar un nuevo alias/email (si es existente se te enviará un código)
4) Hacer de su nuevo email el principal y borrar el email viejo de la cuenta`
            )
            .setColor("Green");

        await message.channel.send({ embeds: [embed] });
    }

    // Panel Compra
    if (message.content === "comp") {
        if (!message.member.roles.cache.some(r => r.name === "Staff")) {
            return message.reply("🚫 No tenés permiso para usar este comando.");
        }

        await message.delete();

        const embed = new EmbedBuilder()
            .setTitle("💝 ¡Gracias por tu compra!")
            .setDescription(
                "🩷 Muchas gracias por tu compra, te agradecería que dejes tu reseña en [🤝 - feedback](https://discord.com/channels/1193400722906165298/1221518007835168819)\n\n" +
                "❕ También te pedimos que te unas a nuestros grupos de Roblox ya que si estas por 14 días podremos enviarte **Robux de forma instantánea**:\n\n" +
                "Grupo 1: https://www.roblox.com/es/communities/35983303\n" +
                "Grupo 2: https://www.roblox.com/es/communities/35983311\n" +
                "Grupo 3: https://www.roblox.com/es/communities/767157499\n" +
                "Grupo 4: https://www.roblox.com/es/communities/35983320\n" +
                "Grupo 5: https://www.roblox.com/es/communities/35983302\n" +
                "Grupo 6: https://www.roblox.com/es/communities/35983328"
            )
            .setColor("Green");

        await message.channel.send({ embeds: [embed] });
    }
});

client.login(TOKEN);
