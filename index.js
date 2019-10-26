const readline = require('readline-sync');
const robots = {
    // userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

async function start()
{
    const content = {};
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    
    await robots.text(content);
    
    function askAndReturnSearchTerm()
    {
        return readline.question('Digite um termo para buscar na Wikipedia ');
    }

    function askAndReturnPrefix()
    {
        const prefixes = ['Quem é', 'O que é', 'A história de'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes);
        const selectedPrefixText = prefixes[selectedPrefixIndex];

        return selectedPrefixText;
    }
    console.log(content);
}
start();