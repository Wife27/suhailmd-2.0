const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18294797498";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18294797498";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTeGtJaXRiNi9YM3lyM2k3N0dGSGF3NHZlS3V3ZUtHd1pxYXRoTHF1NDVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQcG9qQ3BjVlJteW1kdGtBY0g3Rl93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwZGQ2NWRlLWE0ZDctNGE3MS1hNWUwLTU5ZmUwYTk0N2IzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDI1NCxcbiAgICAgIDE3MSxcbiAgICAgIDYwLFxuICAgICAgMTEsXG4gICAgICAyNyxcbiAgICAgIDE1NixcbiAgICAgIDI1MCxcbiAgICAgIDMzLFxuICAgICAgMjEzLFxuICAgICAgMjM4LFxuICAgICAgNzcsXG4gICAgICA1NixcbiAgICAgIDE5OSxcbiAgICAgIDEzOSxcbiAgICAgIDEzOCxcbiAgICAgIDQ5LFxuICAgICAgMTY0LFxuICAgICAgMjM1LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTYzLFxuICAgICAgMjMsXG4gICAgICAyMzcsXG4gICAgICA2MyxcbiAgICAgIDk4LFxuICAgICAgMjIxLFxuICAgICAgMTk1LFxuICAgICAgMzQsXG4gICAgICAxMDQsXG4gICAgICA1MixcbiAgICAgIDE3MCxcbiAgICAgIDEwOCxcbiAgICAgIDE0NSxcbiAgICAgIDEzMSxcbiAgICAgIDExNixcbiAgICAgIDEzOSxcbiAgICAgIDI1NCxcbiAgICAgIDkzLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRGR1ZTQ1JMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODI5NDc5NzQ5ODo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA4NTU4NjM1MjMzOjk2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyYnA2VURFS0tKMHJvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVU0NXFpeU5UOFA1dG02N0kxb1RDYVRnRmZFS3N5Q1RYVHN5MVVhcENqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyQjVrd1VobGt0UjRsanRuTUJVcDNxdnFxZXZFQkFManJXTjBOM2ZDazZVeDNLcXJhT0lQTSthcVdtMU9sV3RDYVdFczRWYnFvWXV1Wmd2VlYrTXBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzdXlVYmY0VE4yL01weFk0SWtpVXpSZUpuazd2QnFiWGsrekhjeVFuWG9QZ29XYlkvRGEvS3VhVjB6eEszVFBVdlJsTThQc2Y0N3VMVFlRZ1V5d1ZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODI5NDc5NzQ5ODo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU5MjIzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXhVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTltVjlmYzNEVERFSWE2bUQrNWg3cUllZHo4SlY5UlY2dmhxd3dCMVRuMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODM1NTE2NTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1NDc3NzI1NTFcIn0iCn0="  // PUT your SESSION_ID 


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
