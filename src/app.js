export default {
	id: 'lumintulogic-shell-exec',
	name: 'Shell Exec',
	icon: 'box',
	description: 'Execute a command from linux shell',
	overview: ({ directory,command }) => [
		{
			label: 'Execute',
			text: command
		},
		{
			label: 'Location',
			text: directory
		}
	],
	options: [
		{
			field: 'directory',
			name: 'Location',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input'
			}
		},
		{
			field: 'command',
			name: 'Command',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input'
			}
		},
		{
			field: 'output',
			name: 'Output',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'select-dropdown',
            	options: {
					choices: [{
						text:'JSON',
						value: 'JSON'
					}, {
						text: 'Text (Preserves Whitespace)',
						value: 'plainText'
					}, {
						text: 'Text (Omits Whitespace)',
						value: 'Text'
					}]
            	}
			}
		}
	]
};
