#!usr/bin/env node

const meow = require('meow');
const chalk = require('chalk');
const main = require('../index');

const cli = meow(
	`
        ${chalk.blue('create-discord-boilerplate 1.0.0')}

        Usage
        ${chalk.greenBright('$ create-discord-boilerplate --path <dir>')}

        Options
        ${chalk.greenBright('--help, -h  Shows this message')}
        ${chalk.greenBright('--path, -p  The path to create the boilerplate code')}

        Example
        ${chalk.cyanBright('$ create-discord-boilerplate --path bot')}
`,
	{
		flags: {
			path: {
				type: 'string',
				alias: 'p',
				isRequired: true,
			},
			help: {
				alias: 'h',
			},
		},
	},
);

main(cli.input[0], cli, cli.flags);
