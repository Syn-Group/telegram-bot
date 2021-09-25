exports.action = (ctx, next) => {
    console.log('Usuário ativou o Middleware')
    next();
}