const prompts = require('./prompts');
const path = require('path');
const inquirer = require('inquirer');

/**
 * @param {string} path
 * @param {import('meow').Result<{path: {type: 'string', alias: 'p', isRequired: true}, help: {type: string}}>} cli
 * @param {import('meow').TypedFlags<{path: {type: 'string', alias: 'p', isRequired: true}, help: {type: string}}>} flags
 */
module.exports = (path, cli, flags) => {
        if (flags.help) return cli.showHelp(0);

        const { language, library, token } = await inquirer.prompt([
                prompts.language,
                prompts.library,
                prompts.token
        ]);
}