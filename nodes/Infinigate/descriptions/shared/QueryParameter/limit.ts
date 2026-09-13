import { type INodeProperties } from 'n8n-workflow';

export const limitQueryParameters: INodeProperties[] = [
	{
		displayName: 'Use Limit',
		name: 'useLimit',
		description: 'Whether to limit the number of returned items',
		type: 'boolean',
		default: false,
	},
	{
		displayName: 'Take',
		name: 'Take',
		type: 'number',
		default: 50,
		description: 'Maximum number of items to return',
		displayOptions: {
			show: {
				useLimit: [true],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'Take',
			},
		},
	},
	{
		displayName: 'Skip',
		name: 'Skip',
		type: 'number',
		default: 0,
		description: 'Number of items to skip',
		displayOptions: {
			show: {
				useLimit: [true],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'Skip',
			},
		},
	},
];
