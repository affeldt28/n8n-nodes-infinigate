import { type INodeProperties } from 'n8n-workflow';

export const periodQueryParameters: INodeProperties[] = [
	{
		displayName: 'Period Start',
		name: 'PeriodStart',
		type: 'dateTime',
		default: '',
		description: 'Filter by the start of the period',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodStart',
			},
		},
	},
	{
		displayName: 'Period End',
		name: 'PeriodEnd',
		type: 'dateTime',
		default: '',
		description: 'Filter by the end of the period',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodEnd',
			},
		},
	},
];
