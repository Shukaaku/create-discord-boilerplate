module.exports = {
	language: {
		name: 'language',
		type: 'list',
		message: 'What language do you want your discord bot to be in?',
		choices: [
			{
				name: 'JavaScript',
				value: 'javascript',
			},
			{
				name: 'TypeScript',
				value: 'typescript',
			},
		],
	},
	library: {
		name: 'library',
		type: 'list',
		message: 'What discord api library would you like to use?',
		choices: [
			{
				name: 'Discord.js',
				value: 'djs',
			},
			{
				name: 'Commando',
				value: 'commando',
			},
			{
				name: 'Akairo',
				value: 'akairo',
			},
			{
				name: 'Eris',
				value: 'eris',
			},
			{
				name: 'Yuuko',
				value: 'yuuko',
			},
		],
	},
	token: {
		name: 'token',
		type: 'password',
		message: 'What is your discord bot token?',
	},
};
