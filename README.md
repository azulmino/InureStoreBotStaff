Bot conectado como InureClientes
node:events:486
      throw er; // Unhandled 'error' event
      ^

DiscordAPIError[10062]: Unknown interaction
    at handleErrors (C:\Users\Administrator\Desktop\InureStoreBotClientes-main\node_modules\@discordjs\rest\dist\index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
    at async BurstHandler.runRequest (C:\Users\Administrator\Desktop\InureStoreBotClientes-main\node_modules\@discordjs\rest\dist\index.js:866:23)
    at async _REST.request (C:\Users\Administrator\Desktop\InureStoreBotClientes-main\node_modules\@discordjs\rest\dist\index.js:1307:22)
    at async ChatInputCommandInteraction.reply (C:\Users\Administrator\Desktop\InureStoreBotClientes-main\node_modules\discord.js\src\structures\interfaces\InteractionResponses.js:193:22)
Emitted 'error' event on Client instance at:
    at emitUnhandledRejectionOrErr (node:events:391:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:91:21) {
  requestBody: {
    files: [],
    json: {
      type: 4,
      data: {
        content: undefined,
        tts: false,
        nonce: undefined,
        enforce_nonce: false,
        embeds: [
          {
            title: '💰 Precio de Robux',
            color: 16766720,
            description: '**Cantidad:** 165 Robux\n' +
              '**Método:** gamepass\n' +
              '\n' +
              '🇦🇷 Argentina: 2227.50 ARS\n' +
              '🇺🇸 Estados Unidos: 1.37 USD\n' +
              '🇲🇽 México: 25.57 MXN\n' +
              '🇨🇴 Colombia: 5775.00 COP\n'
          }
        ],
        components: undefined,
        username: undefined,
        avatar_url: undefined,
        allowed_mentions: undefined,
        flags: undefined,
        message_reference: undefined,
        attachments: undefined,
        sticker_ids: undefined,
        thread_name: undefined,
        applied_tags: undefined,
        poll: undefined
      }
    }
  },
  rawError: { message: 'Unknown interaction', code: 10062 },
  code: 10062,
  status: 404,
  method: 'POST',
  url: 'https://discord.com/api/v10/interactions/1451712118352248882/aW50ZXJhY3Rpb246MTQ1MTcxMjExODM1MjI0ODg4Mjo5Qko5VGNxMWxmQjNMeEYyZUFIZDlscER6Q1BVM1p4Tzlmcmp2VFBTYjZYOHNNaGJRREQ5c21UUmpqR1ZrcXpRdXZ2c3MwVWRPeWw0NkNFbThiTnYzaUFMc2k2RHF6Z1dZTUROdzJMNzI1MlVla3BaNW13Nm1ncnFlVXpPMGxTcg/callback?with_response=false'
}

node:events:486
      throw er; // Unhandled 'error' event
      ^

DiscordAPIError[10062]: Unknown interaction
    at handleErrors (C:\Users\Administrator\Desktop\InureStoreBotStaff-main\node_modules\@discordjs\rest\dist\index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
    at async BurstHandler.runRequest (C:\Users\Administrator\Desktop\InureStoreBotStaff-main\node_modules\@discordjs\rest\dist\index.js:866:23)
    at async _REST.request (C:\Users\Administrator\Desktop\InureStoreBotStaff-main\node_modules\@discordjs\rest\dist\index.js:1307:22)
    at async ChatInputCommandInteraction.reply (C:\Users\Administrator\Desktop\InureStoreBotStaff-main\node_modules\discord.js\src\structures\interfaces\InteractionResponses.js:193:22)
    at async Client.<anonymous> (C:\Users\Administrator\Desktop\InureStoreBotStaff-main\src\index.js:137:9)
Emitted 'error' event on Client instance at:
    at emitUnhandledRejectionOrErr (node:events:391:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:91:21) {
  requestBody: {
    files: [],
    json: {
      type: 4,
      data: {
        content: undefined,
        tts: false,
        nonce: undefined,
        enforce_nonce: false,
        embeds: [
          {
            title: '🎮 Creación de Gamepass',
            description: 'https://discord.com/channels/1438714947914956823/1438714954340630700\n' +
              '\n' +
              'Tenés que crear un gamepass de **1429 Robux** para que te lleguen **1000 Robux**,\n' +
              'desactivar los precios regionales y enviame la ID del pase 🩷' ,
            color: 5763719
          }
        ],
        components: undefined,
        username: undefined,
        avatar_url: undefined,
        allowed_mentions: undefined,
        flags: undefined,
        message_reference: undefined,
        attachments: undefined,
        sticker_ids: undefined,
        thread_name: undefined,
        applied_tags: undefined,
        poll: undefined
      }
    }
  },
  rawError: { message: 'Unknown interaction', code: 10062 },
  code: 10062,
  status: 404,
  method: 'POST',
  url: 'https://discord.com/api/v10/interactions/1451713120451166353/aW50ZXJhY3Rpb246MTQ1MTcxMzEyMDQ1MTE2NjM1MzptbU1GQ3hWUVBWR0s4Ulh6UUJibTZkTGthNVNuNWgwWHFhRmZOYW5oUVpwMjlvbVNLTzVlcXQxdlp4NzJQdnZKSG4wdlphWmtvdXBFblNUeUR0NThwT05WaXhyRE1oYXNnNG1zWVVUd3VONUlpbmJhWEUxN1VONjV3S0pMeXJEag/callback?with_response=false'
}
