const ascii = require("ascii-table");
const table = new ascii().setHeading("Evento", "Status");

module.exports = async (err, files, bot) => {
    if (err) return console.error(err);
    files.forEach((file, index) => {
        const event = require(`./../events/${file}`);
        if (event.name) {
            bot.on(event.name, event.execute);
            table.addRow(event.name, "Bombou");
        } else {
            table.addRow(event.name, "Não bombou");
        }

        if (index == files.length - 1) console.log(table.toString());
    });
};