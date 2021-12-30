const ascii = require("ascii-table");
const table = new ascii().setHeading("Comando", "Status");

module.exports = async (err, files, bot) => {
    if (err) return console.error(err);
    files.forEach((file, index) => {
        const command = require(`./../commands/${file}`);
        if (command.name) {
            bot.command(command.name, command.execute);
            table.addRow(command.name, "Bombou");
        } else {
            table.addRow(command.name, "Não bombou");
        }

        if (index == files.length - 1) console.log(table.toString());
    });
};