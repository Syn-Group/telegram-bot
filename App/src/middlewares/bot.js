exports.action = async (ctx, next) => {
    let MEMBER = await ctx.getChatMember(parseInt(ctx.update.message.from.id))
    if (MEMBER.user.is_bot) {
        ctx.reply('Este BoT não pode ser ativado por outros BoTs.')
        return;
    }
    next();
}

exports.temp = async (ctx, next) => {
    console.log(ctx.update.message.chat.id)
    if (ctx.update.message.chat.id != -1001559323793) {
        console.log('Macaco tentando usar o cbot no canal errado')
        return;
    }
    next()
}