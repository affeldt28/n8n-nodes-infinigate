import { type INodeProperties } from 'n8n-workflow';

export const limitQueryParameters: INodeProperties[] = [
	{
		name: 'Take',
		displayName: 'Take',
		type: 'number',
		default: '',
		description: 'Number of items to take',
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
		routing: {
			send: {
				type: 'query',
				property: 'Skip',
			},
		},
	},
];
