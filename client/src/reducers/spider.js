export const spider = {
	options: [
		{ setting: 'size',
			type:  'range',
			lower: 1,
			upper: 20,
			default:   10
		},
		{
			setting: 'amount',
			type: 'range',
			lower: 1,
			upper: 25,
			default: 1
		},
		{
			setting: 'color',
			type: 'select',
			choices: ['black', 'red', 'brown']
		}
	]
}
