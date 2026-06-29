import { type INodeProperties } from 'n8n-workflow';

export const limitQueryParameters: INodeProperties[] = [
	{
		name: 'useLimit',
		displayName: 'Use Limit',
		description: 'Whether to use limit for the request',
		type: 'boolean',
		default: false,
	},
	{
		name: 'Take',
		displayName: 'Take',
		type: 'number',
		default: '',
		description: 'Number of items to take',
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
		name: 'Skip',
		displayName: 'Skip',
		type: 'number',
		default: '',
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
