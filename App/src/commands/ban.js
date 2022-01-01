module.exports = {
	name: 'ban',
	description: 'Moderação - Ban',
	execute: async (ctx) => {
        // Colocar aqui o switch case do comando de ban
        /*
		console.log(ctx.update.message)

        console.log('USER:')
        console.log(ctx.update.message.entities[1].user)
        
        const data = ctx.update.message.entities;
        
        var data_filter = data.filter( element => element.type =="mention")*/
        const user = await ctx.getChatMember("@redpillsystemtecnologia", "@aguiaroficial")
        ctx.reply(user)
        //console.log(data_filter)
        //console.log(ctx.update.message.entities)
	},
};