const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_12_09_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OSAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE1RjNIQlpSSTV2VmZDbnJiN3hiU3lCOHNNSDBPZy85VHRvY1FqZTZrSUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V  // PUT your SESSION_ID SUHAIL_16_41_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmMG95dGUvMVFZelB5UmJ5SHFadGw2WG41emM5clFWZ1hNcmpyZHlQQ2lnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTOVhBelVxQVN0LVhaVFBsRjlxSnBBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjMTA1ZWQ2LTE5MGItNDIxMy05NjBkLWY0NmNiMzIzMGI5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAyNSxcbiAgICAgIDE4OSxcbiAgICAgIDcyLFxuICAgICAgMjMyLFxuICAgICAgMTUyLFxuICAgICAgOTYsXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDIwNixcbiAgICAgIDE4OCxcbiAgICAgIDEzOCxcbiAgICAgIDg5LFxuICAgICAgNjEsXG4gICAgICA2NSxcbiAgICAgIDkyLFxuICAgICAgNTgsXG4gICAgICA5NSxcbiAgICAgIDI0MSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTAyLFxuICAgICAgMTQ4LFxuICAgICAgMTA3LFxuICAgICAgMjQyLFxuICAgICAgNTQsXG4gICAgICAxMTYsXG4gICAgICA3MSxcbiAgICAgIDM0LFxuICAgICAgMTk2LFxuICAgICAgODQsXG4gICAgICAxMjMsXG4gICAgICAyMzksXG4gICAgICAyNTMsXG4gICAgICAyNyxcbiAgICAgIDE4NyxcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDE2MSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRktLSFBURFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNzA1MzUxMTUwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzc0ODI0MjMyNDI3NTU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmFrNjRzREVKbUI1N29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiSS9SS0pTOHc2VmNJKzJDOVF0Y0pjVXBnZ0pwQjZDWUhyR2xOZDAwNHg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlp5WDEvNlcyNW9JaklDSlFNR1FZWnFwSzRyTzh3TzBGbDhPemVIWStaZDJBdFVnVDlSOXR3NTlXOURxb1h1VEV3RHlQdWhqaTFxV3oyNnZlMk5WRENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNtZmZBZDRzR0djZUVCcjU2T0lXK0M3cmQ2cTVBWElIZkJldS9DdlhvbVora3l0bmg3amlHNW96QS9YWEJRZXlQK0pRZFlHSTQ5aHN0alhrdTFaV0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzcwNTM1MTE1MDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzkzNTI2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdDQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0NBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnllUmFkT1krdmhNamxiUWRkWXJCVERoZnJvWHUzaGkvRXB2a3k0MEU5VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzAxMzI3NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5MzQ0ODMzNzBcIn0iCn0=

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
