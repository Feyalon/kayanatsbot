import { Bot } from "https://deno.land/x/grammy@v1.12.0/mod.ts";

const bot = new Bot("5962048450:AAHudOipmS4tbKmLQtt0n0zNM5eqY6PgEeY"); 
let image;
let hentaiimage;
async function getNeko() {
    const response = await fetch('https://api.waifu.pics/sfw/waifu')
    const json = await response.json()
    console.log(json.url)
    image = json.url
}
async function hentai() {
    const response = await fetch('https://api.waifu.pics/nsfw/waifu')
    const json = await response.json()
    console.log(json.url)
    hentaiimage = json.url
}
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command("help", (ctx) => ctx.reply("Im bot for chatting with peoples"))
bot.command("sendphoto", async (ctx) => {
    await getNeko()
    const photo = image;
    await ctx.replyWithPhoto(photo)
  })
bot.command("sendhentai", async (ctx) => {
    await hentai()
    const hema = hentaiimage;
    await ctx.replyWithPhoto(hema)
  })
  bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
});
bot.start();