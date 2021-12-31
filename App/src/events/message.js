module.exports = {
	name: 'message',
	description: 'Evento de mensagem',
	execute: (ctx) => {
		ctx.reply('Event Handler Funcionando -> message.js')
	},
};