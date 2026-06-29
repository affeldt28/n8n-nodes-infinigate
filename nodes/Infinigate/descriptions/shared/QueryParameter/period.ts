import { type INodeProperties } from 'n8n-workflow';

export const periodQueryParameters: INodeProperties[] = [
	{
		name: 'PeriodStart',
		displayName: 'PeriodStart',
		type: 'dateTime',
		default: '',
		description: 'Filter for PeriodStart',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodStart',
			},
		},
	},
	{
		name: 'PeriodEnd',
		displayName: 'PeriodEnd',
		type: 'dateTime',
		default: '',
		description: 'Filter for PeriodEnd',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodEnd',
			},
		},
	},
];
