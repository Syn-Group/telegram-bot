exports.ban = async (ctx, next) => {
    let MEMBER = await ctx.getChatMember(parseInt(ctx.update.message.from.id))

    if (MEMBER) {
        if ((MEMBER.can_restrict_members) || (MEMBER.status === 'creator')) {
            next()
        } else {
            console.log('Membro não tem permissão para banir usuários')
        }
    }

    //ctx.reply('Você NÃO possui permissão para banir usuários')
    console.log(`[${ctx.update.message.from.id}] Ban command`)
    //next();
}