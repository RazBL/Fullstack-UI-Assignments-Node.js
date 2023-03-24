const { Create, ConcatFiles, ReadFile, EndProgram } = require('./functions');
const { EventHandler } = require('./models/EventHandler');

async function Main() {
    let eventHandler = new EventHandler();
    eventHandler.on('readFile', ReadFile );
    eventHandler.emit('readFile');

    eventHandler.on('endProgram', EndProgram );
    eventHandler.emit('endProgram');
}

Main();